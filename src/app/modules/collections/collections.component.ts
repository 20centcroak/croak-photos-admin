import { Component, OnInit } from '@angular/core';
import { CollectionInterface } from './models/collection-interface';
import { CollectionsService } from './services/collections.service';

@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.css']
})
export class CollectionsComponent implements OnInit {
  private collections: CollectionInterface[];
  constructor(private collectionsService: CollectionsService) {}

  ngOnInit() {
    this.retrieveCollections();
  }

  private retrieveCollections(): void {
    this.collectionsService
      .getCollections()
      .subscribe(collections => (this.collections = collections));
  }

  public getCollections(): CollectionInterface[] {
    return this.collections;
  }
}
