import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { MainService } from '../../serivces/main.service';

@Component({
  selector: 'app-create-character',
  templateUrl: './create-character.component.html',
  styleUrls: ['./create-character.component.scss']
})
export class CreateCharacterComponent implements OnInit {

  public image: any;


  createCharacter = new FormGroup({
    nameCharacter: new FormControl('', Validators.required),
    ageCharacter: new FormControl('', Validators.required),
    rolCharacter: new FormControl('', Validators.required),
    personality: new FormControl('', Validators.required),
    descriptionRol: new FormControl('', Validators.required),
    ability: new FormControl('', Validators.required),
    date: new FormControl('', Validators.required),
    creatorName: new FormControl('', Validators.required),
    avatar: new FormControl('', Validators.required),
  });


  constructor(
   public mainService: MainService
  ) { }

  ngOnInit(): void {
  }

  getImage(event:any){
    this.image = event.target.files[0]
    // console.log(event.target.files[0]);
    
  }
  sendCharacter() {
    this.mainService.uploadImage(this.createCharacter, this.image)
  }

}
