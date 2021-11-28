from django.urls import path
from account import views

app_name = 'account'
urlpatterns = [
    path('<str:uid>/<str:token>', views.activate, name='activate')
]