from django.db import models
from django.urls import reverse
import uuid
from datetime import date
from django.contrib.auth.models import User
from django.core.validators import MinLengthValidator

# Create your models here.
class Genre(models.Model):
    """Model representing a event genre."""
    name = models.CharField(max_length=30, help_text='Enter a event genre (e.g. Theater, Concert, etc)')

    def __str__(self):
        """String for representing the Model object."""
        return self.name

class Promoter(models.Model):
    """Model representing an Artist"""
    name = models.CharField(max_length=30, help_text='Enter the promoter name')
    personalid = models.CharField(validators=[MinLengthValidator(8)], max_length=8, help_text='Enter the clients ID')
    mobile = models.CharField(validators=[MinLengthValidator(9)], max_length=9, help_text='Enter the clients Mobile Phone')
    email = models.EmailField(default='none@none.com', help_text='Enter the clients Mobile Phone')
    def __str__(self):
        """String for representing the Model object."""
        return self.name

class Artist(models.Model):
    """Model representing an Artist"""
    name = models.CharField(max_length=30, help_text='Enter the artist name')

    def __str__(self):
        """String for representing the Model object."""
        return self.name

class Client(models.Model):
    """Model representing an Client"""
    name = models.CharField(max_length=30, help_text='Enter the client\'s Name')
    personalid = models.CharField(validators=[MinLengthValidator(8)], max_length=8, help_text='Enter the client\'s ID')
    mobile = models.CharField(validators=[MinLengthValidator(9)], max_length=9, help_text='Enter the client\'s Mobile Phone')
    email = models.EmailField(default='none@none.com', help_text='Enter the clients Mobile Phone')
    def __str__(self):
        """String for representing the Model object."""
        return self.name

class Cost(models.Model):
    """Model representing a price of sell"""
    cost = models.DecimalField(decimal_places=2, max_digits=6, help_text='Enter the price')

    def __str__(self):
        """String for representing the Model object."""
        return self.cost

class CostEvent(models.Model):
    """Model representing all cost of event."""
    local = models.ForeignKey(Cost, on_delete=models.PROTECT, null=True, related_name='localcost', help_text='Select the localation oost for this group')
    marketing = models.ForeignKey(Cost, on_delete=models.PROTECT, null=True, related_name='marketingcost', help_text='Select the marketing cost for this group')
    publicidad = models.ForeignKey(Cost, on_delete=models.PROTECT, null=True, related_name='publicitycost', help_text='Select the publicity cost for this group')
    artist = models.ForeignKey(Cost, on_delete=models.PROTECT, null=True, related_name='performercost', help_text='Select the artist cost for this group')
    impuestos = models.ForeignKey(Cost, on_delete=models.PROTECT, null=True, related_name='taxcost', help_text='Select the tax cost for this group')
    apdayc = models.ForeignKey(Cost, on_delete=models.PROTECT, null=True, related_name='apdayccost', help_text='Select the  apdayc cost for this group')
    logistica = models.ForeignKey(Cost, on_delete=models.PROTECT, null=True, related_name='logisticscost', help_text='Select the logistics cost for this group')
    extrasartistas = models.ForeignKey(Cost, on_delete=models.PROTECT, null=True, related_name='extraperformercost', help_text='Select the extra performers cost for this group')
    ambiente = models.ForeignKey(Cost, on_delete=models.PROTECT, null=True, related_name='ambiencecost', help_text='Select the cost ambience for this group')
    otros = models.ForeignKey(Cost, on_delete=models.PROTECT, null=True, related_name='otherscost', help_text='Select the others cost for this group')

    def __str__(self):
        """String for representing the Model object."""
        return f'{self.apdayc + self.marketing + self.local + self.artist + self.impuestos + self.logistica + self.extrasartistas + self.ambiente + self.otros + self.publicidad}'

class ArtistGroup(models.Model):
    """Model representing an Artist Group."""
    name = models.CharField(max_length=30, help_text='Enter the artist group\'s Name')
    artists = models.ManyToManyField(Artist, help_text='Select the artists for this group')
    cost = models.ManyToManyField(Cost, help_text='Select the cost for this group')
    genre = models.ManyToManyField(Genre, help_text='Select a genre for this group')

    def __str__(self):
        """String for representing the Model object."""
        return self.name

class Location(models.Model):
    """Model representing an Location"""
    name = models.CharField(max_length=30, help_text='Enter the location name')
    address = models.CharField(max_length=50, help_text='Enter the location address')

    def __str__(self):
        """String for representing the Model object."""
        return self.name

class LocationInstance(models.Model):
    """Model representing an Section"""
    name = models.CharField(max_length=30, help_text='Enter the location name')
    internalname = models.CharField(max_length=20, help_text='Enter the internal name for the location')
    location = models.ForeignKey(Location, on_delete=models.PROTECT, null=True, help_text='Select a location template')
    cost = models.ForeignKey(Cost, on_delete=models.PROTECT, null=True, blank=True, help_text='Select the rent price')
    def __str__(self):
        """String for representing the Model object."""
        return self.name

class Floor(models.Model):
    """Model representing an Section"""
    name = models.CharField(max_length=30, help_text='Enter the floor name')
    internalname = models.CharField(max_length=20, help_text='Enter the internal name for the floor')
    location = models.ForeignKey(LocationInstance, on_delete=models.PROTECT, help_text='Select a location FOR THIS SECTION')
    def __str__(self):
        """String for representing the Model object."""
        return self.name

class Section(models.Model):
    """Model representing an Section"""
    name = models.CharField(max_length=30, help_text='Enter the section name')
    internalname = models.CharField(max_length=20, help_text='Enter the internal name for the section')
    floor = models.ForeignKey(Floor, on_delete=models.PROTECT, help_text='Select for this for this section')
    def __str__(self):
        """String for representing the Model object."""
        return self.name

class Seat(models.Model):
    """Model representing a seat (but not a seat to be deploy in a specific event)."""
    name = models.CharField(max_length=30)
    price = models.ForeignKey(Cost, on_delete=models.PROTECT, help_text='Select the price for this seat')

    def __str__(self):
        """String for representing the Model object."""
        return self.name

class SeatInstance(models.Model):
    """Model representing a seat to be deploy in a specific event."""
    internalid = models.UUIDField(default=uuid.uuid4, help_text='Unique ID for this particular seat')
    name = models.CharField(max_length=20, help_text='Enter the seat name for event')
    internalname = models.CharField(max_length=30, help_text='Enter the internal name for the seat')
    client = models.ForeignKey(Client, on_delete=models.PROTECT, null=True, blank=True, help_text='Client who purchased')
    seat = models.ForeignKey(Seat, on_delete=models.PROTECT, help_text='seat template to be used')
    section = models.ForeignKey(Section, on_delete=models.PROTECT, help_text='section to be used')
    whoRegister = models.ForeignKey(User, on_delete=models.PROTECT, related_name='whoRegister', help_text='User who register the purchase')
    whoPayment = models.ForeignKey(User, on_delete=models.PROTECT, null=True, related_name='whoPayment', help_text='User who register the payment')
    promoter = models.ForeignKey(Promoter, on_delete=models.SET_NULL, null=True, help_text='User who sell the seat')
    datepurchase = models.DateField(null=True, blank=True, help_text='Date of purchase')
    datepayment = models.DateField(null=True, blank=True, help_text='Date of payment')
    observations = models.CharField(max_length=200, null=True, blank=True, help_text='observations')

    PURCHASE_STATUS = (
        ('s', 'Sold'),
        ('m', 'Marketing'),
        ('i', 'Invitee'),
        ('a', 'Available'),
        ('r', 'Reserved'),
    )

    status = models.CharField(
        max_length=1,
        choices=PURCHASE_STATUS,
        blank=False,
        default='a',
        help_text='Seat availability',
    )

    class Meta:
        ordering = ['datepurchase', 'name']

    def get_absolute_url(self):
        """Returns the URL to access a detail record for this seat."""
        return reverse('tickets:seat-detail', args=[str(self.internalid)])
    
    def __str__(self):
        """String for representing the Model object."""
        return f'{self.name} ({self.status}) ({self.seat.price}) {self.client.name})'

    @property
    def is_overdue(self):
        """Determines if the payment is overdue based on date of payment and current date."""
        return bool(self.datepayment and date.today() > self.datepayment)

class Event(models.Model):
    """Model representing a specific event."""
    internalid = models.UUIDField(default=uuid.uuid4, help_text='Unique ID for the event')
    internalname = models.CharField(max_length=30, help_text='Enter the internal name for event')
    name = models.CharField(max_length=20, help_text='Enter the name for event')
    artist = models.ManyToManyField(Artist, help_text='Select the performers for this event')
    location = models.ForeignKey(LocationInstance, on_delete=models.PROTECT, help_text='Select a location FOR THIS event')
    genre = models.ManyToManyField(Genre, help_text='Select a genre for this event')
    whoRegister = models.ForeignKey(User, on_delete=models.PROTECT, help_text='User who register the creation of the event')
    datecreation = models.DateField(help_text='Date of creation')
    dateevent = models.DateField(null=True, blank=True, help_text='Date of event')
    costs = models.ForeignKey(CostEvent, on_delete=models.PROTECT, null=True, blank=True, help_text='Select the costs for this event')
    observations = models.CharField(null=True, blank=True, max_length=200, help_text='Observations')

    PURCHASE_STATUS = (
        ('s', 'Soldout'),
        ('p', 'Private'),
        ('a', 'Available'),
        ('c', 'Canceled'),
        ('f', 'Finished'),
    )

    status = models.CharField(
        max_length=1,
        choices=PURCHASE_STATUS,
        blank=False,
        default='a',
        help_text='Event availability',
    )

    class Meta:
        ordering = ['dateevent', 'name']
        permissions = (("can_mark_returned", "Set book as returned"),)

    def get_absolute_url(self):
        """Returns the URL to access a particular author instance."""
        return reverse('tickets:event-detail', args=[str(self.internalid)])
    
    def __str__(self):
        """String for representing the Model object."""
        return f'{self.name} ({self.dateevent})'

    @property
    def is_overdue(self):
        """Determines if the payment is overdue based on date of payment and current date."""
        return bool(self.dateevent and date.today() > self.dateevent)