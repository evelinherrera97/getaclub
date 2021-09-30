import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  
  @Input()text: string;
  @Input()type: string;
  @Input()id: string;
  @Output() submit = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  public validate() {
    this.submit.emit();
  }

}
