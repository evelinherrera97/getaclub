import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() item: any;
  @Input() id: number;

  @Output() delete: EventEmitter<any> = new EventEmitter();
  @Output() update: EventEmitter<string> = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
  }

  public deleteitem() {
    this.delete.emit();
  }
  public updateitem() {
    this.update.emit();
  }

}
