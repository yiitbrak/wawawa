from django.http import HttpResponse
from django.shortcuts import render
from .models import Note

# Create your views here.

def index(response):
    return render(response, ['notes/index.html',], context={'note_list': Note.objects.all()})