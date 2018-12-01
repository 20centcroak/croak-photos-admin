import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CollectionInterface } from '../models/collection-interface';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})
export class CollectionComponent implements OnInit {
  private options: FormGroup;
  @Input()
  private collection: CollectionInterface;
  private edit = false;
  private defaultTitle = 'Collection name';
  private defaultDescription = 'Description';
  private defaultComments = 'Add comments';
  public title = this.defaultTitle;
  public description = this.defaultDescription;
  public comments = this.defaultComments;

  constructor(fb: FormBuilder) {
    this.options = fb.group({
      floatLabel: 'auto'
    });
  }

  ngOnInit() {
    this.title = this.collection.title;
    this.description = this.collection.description;
    this.comments = this.collection.comments;
  }

  public onEdit(): void {
    this.edit = true;
    if (this.title === this.defaultTitle) {
      this.title = '';
    }
    if (this.description === this.defaultDescription) {
      this.description = '';
    }
    if (this.comments === this.defaultComments) {
      this.comments = '';
    }
  }

  public isEdited() {
    return this.edit;
  }

  public stopEditing() {
    this.edit = false;
  }
}
