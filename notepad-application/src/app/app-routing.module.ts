import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddNotesComponent } from './components/add-notes/add-notes.component';
import { NotesListComponent } from './components/notes-list/notes-list.component';

const routes: Routes = [
  {path:'', redirectTo:'list', pathMatch:'full'},
  {path: 'list', component: NotesListComponent},
  {path: 'add', component: AddNotesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
