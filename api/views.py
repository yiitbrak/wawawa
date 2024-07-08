from cairo import Status
from django.http import JsonResponse, HttpResponse
from rest_framework import generics
from rest_framework.response import Response
from .serializers import NoteSerializer
from notes.models import Note

class ListNotes(generics.ListAPIView):
    queryset = Note.objects.all()
    serializer_class = NoteSerializer
    lookup_field = 'id'

class CreateNote(generics.CreateAPIView):
    serializer_class = NoteSerializer

class DeleteNote(generics.DestroyAPIView):
    queryset = Note.objects.all()
    serializer_class = NoteSerializer
    lookup_field = 'id'

class UpdateNote(generics.UpdateAPIView):
    queryset = Note.objects.all()
    serializer_class = NoteSerializer
    lookup_field = 'id'