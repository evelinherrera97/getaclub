import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { ListCharacterComponent } from './modules/list-character/list-character.component';
import { CreateCharacterComponent } from './modules/create-character/create-character.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'lista-personaje',
    component: ListCharacterComponent,
  },
  {
    path: 'crear-personaje',
    component: CreateCharacterComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
