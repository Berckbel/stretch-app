from django.urls import path
from stretch import views

app_name = "stretch"
urlpatterns = [
    path('', views.StretchList.as_view()),
]