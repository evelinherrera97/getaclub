import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MainService {


  public character: Observable<any>;

  constructor(
    private db: AngularFireDatabase,
    public afs: AngularFirestore,
    private storage: AngularFireStorage
  ) { }


  public getCharacters(): Observable<any> {
    this.character = this.afs.collection<any>('character').valueChanges();

    return this.character;
  }
  public createAccount(data: any, downloadURL:any) {
    data.value.avatar = downloadURL
    console.log(data.value);
    
    return this.afs.collection('character').add(data.value);
  }

  public uploadImage(dataForm:any, image:FileUpload) {
    const file = `image/${image.name}`
    const fileRef = this.storage.ref(file)
    const uploadTask = this.storage.upload(file, image);
    uploadTask.snapshotChanges().pipe(
      finalize(() => {
        fileRef.getDownloadURL().subscribe(downloadURL => {
          console.log(downloadURL)
          image.url = downloadURL;
          this.createAccount(dataForm, downloadURL)
        });
      })
    ).subscribe();
    return uploadTask.percentageChanges();
  }


  // private deleteFileDatabase(key: string): Promise<void> {
  //   return this.afs.collection('character').remove(key);
  // }

  
}

export class FileUpload {
  key: string;
  name: string;
  url: string;
  file: File;
} 

export class Character {
  key: string;
  name: string;
  url: string;
  file: File;
} 
