import { Component, ElementRef, EventEmitter, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-custom-modal',
  templateUrl: './custom-modal.component.html',
  styleUrls: ['./custom-modal.component.scss']
})
export class CustomModalComponent implements OnInit {

  @ViewChild('btnclose', {static: false}) btnclose!: ElementRef;
  @Input() title = "";

  action: EventEmitter<boolean> = new EventEmitter();

  
  constructor(private elRef: ElementRef) { }  

  ngOnInit(): void { }

  confirm = () => this.action.emit(true);
  
  cancel = () => this.action.emit(false);

  close = () => this.btnclose.nativeElement.click();
}
