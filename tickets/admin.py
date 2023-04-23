from django.contrib import admin

# Register your models here.
from .models import Genre, Promoter, Artist, Client, Cost, CostEvent, ArtistGroup, Location, LocationInstance, Floor, Section, LocationInstance, Floor, Section, Seat, SeatInstance, Event

admin.site.register(Genre)
admin.site.register(Promoter)
admin.site.register(Artist)
admin.site.register(Client)
admin.site.register(Cost)
admin.site.register(CostEvent)
admin.site.register(ArtistGroup)
admin.site.register(Location)
admin.site.register(LocationInstance)
admin.site.register(Floor)
admin.site.register(Section)
admin.site.register(Seat)
admin.site.register(SeatInstance)
admin.site.register(Event)