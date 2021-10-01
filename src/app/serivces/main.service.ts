import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { FileUpload } from '../shared/interface/file-upload';
import { Form } from '../shared/interface/form';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  public character: Observable<any>;

  constructor(
    public afs: AngularFirestore,
    private storage: AngularFireStorage
  ) { }


  public getCharacters(): Observable<any> {
    this.character = this.afs.collection<Form>('character').valueChanges();
    return this.character;
  }

  public createAccount(data: Form, downloadURL: string) {
    data.avatar = downloadURL;
    this.afs.collection('character').add(data);
  }

  public uploadImage(dataForm: Form, image: FileUpload): Observable<any> {
    const file = `image/${image.name}`
    const fileRef = this.storage.ref(file)
    const uploadTask = this.storage.upload(file, image);
    uploadTask.snapshotChanges().pipe(
      finalize(() => {
        fileRef.getDownloadURL().subscribe(downloadURL => {
          image.url = downloadURL;
          this.createAccount(dataForm, downloadURL)
        });
      })
    ).subscribe();
    return uploadTask.percentageChanges();
  }

}



