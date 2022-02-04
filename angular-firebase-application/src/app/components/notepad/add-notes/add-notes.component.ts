import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { NotesService } from 'src/app/services/notes.service';

@Component({
  selector: 'app-add-notes',
  templateUrl: './add-notes.component.html',
  styleUrls: ['./add-notes.component.scss']
})
export class AddNotesComponent implements OnInit {

  myForm!: FormGroup;
  
  constructor(private fb: FormBuilder, private notes: NotesService) { }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      title: [''],
      content: ['']
    })
  }

  onSave() {
    console.log(this.myForm.value);
    this.notes.addNewNote(this.myForm.value);
    this.myForm.reset();
  }

  resetForm() {
      this.myForm.reset();
  }
}
