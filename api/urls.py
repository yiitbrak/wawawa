from django.urls import path
from . import views

urlpatterns = [
    path("get_notes/", views.ListNotes.as_view()),
    path("add_note/", views.CreateNote.as_view()),
    path("<int:id>/delete_note/", views.DeleteNote.as_view()),
    path("<int:id>/update_note/", views.UpdateNote.as_view()),
]