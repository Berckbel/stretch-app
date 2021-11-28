from .models import Stretch
from .serializers import StretchSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

class StretchList(APIView):

    def get(self, request, format=None):
        stretchs = Stretch.objects.all()
        serializer = StretchSerializer(stretchs, many=True)
        return Response(serializer.data)
    
    def put(self, request, format=None):

        stretch_id = request.data.get('stretch_id', '')
        user_id = request.data.get('user_id', '')

        stretch = Stretch.objects.get(pk=stretch_id)

        if stretch and stretch.moto_count > 1:

            users = stretch.users.all()
            users_id = [u.id for u in users]

            if user_id in users_id:
                stretch.moto_count += 1
                stretch.users.remove(user_id)
                stretch.save()
                return Response(status=status.HTTP_200_OK)
            else:
                stretch.moto_count -= 1
                stretch.users.add(user_id)
                stretch.save()
                return Response(status=status.HTTP_200_OK)

        elif stretch and stretch.moto_count == 1:

            users = stretch.users.all()
            users_id = [u.id for u in users]

            if user_id in users_id:
                stretch.moto_count += 1
                stretch.users.remove(user_id)
                stretch.save()
                return Response(status=status.HTTP_200_OK)

        return Response(status=status.HTTP_304_NOT_MODIFIED)

