from django.contrib import admin

# Register your models here.
from .models import Genre, Promoter, Artist, Person, Cost, CostEvent, ArtistGroup
from .models import Location, LocationInstance, Floor, Section, Seat, SeatInstance, Event

admin.site.register(Genre)
admin.site.register(Promoter)
admin.site.register(Artist)
admin.site.register(Person)
admin.site.register(Cost)
admin.site.register(CostEvent)
admin.site.register(ArtistGroup)
admin.site.register(Location)
admin.site.register(LocationInstance)
admin.site.register(Floor)
admin.site.register(Section)
admin.site.register(Seat)

def display_genre(self):
    """Create a string for the Genre. This is required to display genre in Admin."""
    return ', '.join(genre.name for genre in self.genre.all()[:3])

display_genre.short_description = 'Genre'


class SeatInstanceInline(admin.TabularInline):
    model = SeatInstance
    extra=0
    
@admin.register(SeatInstance)
class SeatInstanceAdmin(admin.ModelAdmin):
    list_display = ['name', 'status', 'section', 'get_price', 'is_overdue', 'is_available', 'promoter', 'internalid']
    list_filter = ('status', 'section__name', 'seat__price', 'promoter')
    readonly_fields = ['get_price', 'is_overdue', 'is_available']  
    fieldsets = (
        (None, {
            'fields': ('internalid', 'name')
        }),
        ('Description', {
            'fields': ('observations', 'get_price', 'section')
        }),
        ('Availability', {
            'fields': ('is_available','status',  'client', 'is_overdue', 'promoter')
        }),
        ('Administrative Info', {
            'fields': ('whoRegister',  'whoPayment', 'datepurchase', 'datepayment', 'internalname')
        }),
    )
    @admin.display(description='Seat Price', ordering='seat__price')
    def get_price(self, obj):
        return obj.seat.price


class EventInline(admin.TabularInline):
    model = SeatInstance
    extra=0
    
@admin.register(Event)
class EventAdmin(admin.ModelAdmin):
    list_display = ['name', 'status', 'location', 'dateevent', display_genre, 'internalid']
    list_filter = ('status', 'location__location__name', 'artist__name', 'genre__name')
    readonly_fields = ['is_overdue', 'is_done']  
    fieldsets = (
        (None, {
            'fields': ('internalid', 'name')
        }),
        ('Description', {
            'fields': ('observations', 'artist', 'location', 'genre')
        }),
        ('Availability', {
            'fields': ('dateevent', 'status', 'is_overdue', 'is_done')
        }),
        ('Administrative Info', {
            'fields': ('internalname', 'costs')
        }),
    )