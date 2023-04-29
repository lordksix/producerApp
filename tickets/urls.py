from django.urls import path
from django.contrib.staticfiles.urls import staticfiles_urlpatterns
from django.views.generic import TemplateView
from . import views

app_name = 'tickets'
urlpatterns = [
    path('', views.index, name='index'),
]
