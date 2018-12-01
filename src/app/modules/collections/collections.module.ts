import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollectionsComponent } from './collections.component';
import { CollectionComponent } from './collection/collection.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material';
import { MatCardModule } from '@angular/material/card';
import { FormBuilder, FormsModule } from '@angular/forms';
import { ClickOutsideDirective } from './collection/click-outside.directive';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatCardModule
  ],
  exports: [CollectionsComponent, CollectionComponent],
  providers: [FormBuilder],
  declarations: [
    CollectionsComponent,
    CollectionComponent,
    ClickOutsideDirective
  ]
})
export class CollectionsModule {}
