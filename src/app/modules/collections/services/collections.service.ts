import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CollectionInterface } from '../models/collection-interface';
import { COLLECTIONS } from 'src/app/mock/COLLECTIONS';

@Injectable({
  providedIn: 'root'
})
export class CollectionsService {
  constructor() {}

  public getCollections(): Observable<CollectionInterface[]> {
    return of(COLLECTIONS);
  }
}
