import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-popup-bottom',
  template: '<ng-content></ng-content>',
  styleUrls: ['./popup-bottom.component.scss']
})
export class PopupBottomComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
