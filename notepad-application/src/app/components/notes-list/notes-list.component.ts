import { Component, OnInit } from '@angular/core';
import { NotesService } from 'src/app/services/notes.service';
import { Notes } from 'src/app/models/notes';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.scss']
})
export class NotesListComponent implements OnInit {

  notesData: any = [];
  allNotes: any;

  public search: any = '';
  query!: string;

  constructor(private notes: NotesService) { }

  ngOnInit(): void {
    this.notes.getAllNotes().subscribe(res => {
      this.notesData = res.map(item => {
        return {
          id: item.payload.doc.id,
          ...item.payload.doc.data() as {}
        };
      });
      this.allNotes = this.notesData;
      console.log(this.allNotes);
    })
  }

  deleteNote(id: any) {
    this.notes.deleteNote(id);
  }

}
