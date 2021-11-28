from rest_framework import serializers
from .models import Stretch

class StretchSerializer(serializers.ModelSerializer):
    class Meta:
        model = Stretch
        fields = ["id","hour","moto_count", "get_users_id"]