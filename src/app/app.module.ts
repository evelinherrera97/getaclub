import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire'
import { AngularFirestore } from '@angular/fire/firestore'
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireStorage } from '@angular/fire/storage'; 


import { environment } from '../environments/environment';
import { CardComponent } from './shared/components/card/card.component';
import { HomeComponent } from './modules/home/home.component';
import { CreateCharacterComponent } from './modules/create-character/create-character.component';
import { ListCharacterComponent } from './modules/list-character/list-character.component';
import { ButtonComponent } from './shared/components/button/button.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CreateCharacterComponent,
    ListCharacterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    ReactiveFormsModule,
    SharedModule
  ],
  providers: [
    AngularFirestore,
    AngularFireStorage
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
