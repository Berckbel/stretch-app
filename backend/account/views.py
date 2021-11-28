from django.shortcuts import redirect
from backend import settings

def activate(request, uid, token):
    print('esete es el request: ', request)
    print('este es el id: ', uid)
    print('este es el token', token)

    return redirect(settings.FRONTEND)