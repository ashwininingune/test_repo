import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTabsModule } from '@angular/material/tabs';

const material = [
  MatToolbarModule, MatIconModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatCardModule,
  MatCheckboxModule, MatSidenavModule, MatListModule, MatMenuModule, MatTableModule, MatPaginatorModule,
  MatSortModule, MatTabsModule
];
@NgModule({
  imports: [material],
  exports: [material]
})
export class MaterialModule { }
