import { Injectable } from '@angular/core';
import { Notes } from 'src/app/models/notes';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  constructor(private _fs: AngularFirestore) { }

  //add new note
  addNewNote(note: Notes) {
    return this._fs.collection('notes').add(note);
  }

  //get all notes data
  getAllNotes() {
    return this._fs.collection('notes').snapshotChanges();
  }

  //delete note
  deleteNote(id: any) {
    this._fs.doc('notes/' + id).delete();
  }

}
