import { Injectable } from '@angular/core';
import { Firestore, doc, onSnapshot, updateDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrackService {

  constructor(private firestore: Firestore) { }

  docRef(path) {
    return doc(this.firestore, path);
  }

  getLocation() {
    let dataRef: any = this.docRef('track/DbRIAYjK3zsoc7JOUOUa');
    // return docData<any>(dataRef);
    return new Observable<any>(observer => {
      onSnapshot(dataRef, (doc) => {
        observer.next(doc.data());
      })
    });
  }

  async updateSourceLocation(source) {
    try {
      const dataRef = this.docRef('track/DbRIAYjK3zsoc7JOUOUa');
      await updateDoc<any>(dataRef, { source });
      return true;
    } catch(e) {
      throw(e);
    }
  }
}
