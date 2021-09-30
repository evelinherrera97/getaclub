import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/serivces/main.service';

@Component({
  selector: 'app-list-character',
  templateUrl: './list-character.component.html',
  styleUrls: ['./list-character.component.scss']
})
export class ListCharacterComponent implements OnInit {

  public list: any

  constructor(
    public mainService: MainService
  ) { }

  ngOnInit(): void {
    this.mainService.getCharacters().subscribe(data => {
      this.list = data
      console.log(this.list);
    })
  }

  deleteItem(index: number) {
    this.list.splice(index, 1)
    console.log('index', index);
    console.log('HOOO', this.list);
    
  }

  updateItem() {
  }

}
