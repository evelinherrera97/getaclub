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
  public showAlert = false;


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

  getImage(event: any) {
    this.image = event.target.files[0];

  }
  sendCharacter() {
    this.showAlert = false;
    if (this.createCharacter.valid) {
      this.mainService.uploadImage(this.createCharacter, this.image).subscribe(resp => {
        this.showAlert = true;
      })
    } else {
      //terminar de validar form
      this.showAlert = true
    }
  }

}
