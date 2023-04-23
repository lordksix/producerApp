from django.urls import path
from django.contrib.staticfiles.urls import staticfiles_urlpatterns
from django.views.generic import TemplateView


app_name = 'tickets'
urlpatterns = [
    path('', TemplateView.as_view(template_name='tickets/main.html'),name="tickets"),
]
