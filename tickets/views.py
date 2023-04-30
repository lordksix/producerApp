from django.shortcuts import render

# Create your views here.
from django.views import View
from django.conf import settings
from .models import Genre, Promoter, Artist, Person, Cost, CostEvent, ArtistGroup
from .models import Location, LocationInstance, Floor, Section, Seat, SeatInstance, Event

def index(request):
    """View function for home page of site."""
    # Generate counts of some of the main objects
    num_events = Event.objects.all().count()
    num_locations = LocationInstance.objects.all().count()
    # Available events and seats
    events = Event.objects.all()
    events_available = Event.objects.filter(status__exact='a').all()
    locations = Event.objects.filter(status__exact='a')
    num_instances_available = Event.objects.filter(status__exact='a').count() #number of events with available status
    num_seats = SeatInstance.objects.filter(status__exact='a').count()  # The 'all()' is implied by default.
    # Number of visits to this view, as counted in the session variable.
    num_visits = request.session.get('num_visits', 1)
    request.session['num_visits'] = num_visits+1

    # Render the HTML template main.html with the data in the context variable.
    return render(
        request,
        'tickets/main.html',
        context={'num_events': num_events, 'num_locations': num_locations,
                 'num_instances_available': num_instances_available, 'num_seats': num_seats,
                 'num_visits': num_visits, 'events_list': events,'events_available_list': events_available,}, 
    )