from django.urls import path
from heroes.views import HeroApiView

urlpatterns = [
    path('heroes-list/', HeroApiView.as_view(), name='heroes_list'),
]