import { Component, ElementRef, EventEmitter, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-custom-modal',
  templateUrl: './custom-modal.component.html',
  styleUrls: ['./custom-modal.component.scss']
})
export class CustomModalComponent implements OnInit {

  @ViewChild('btnclose', {static: false}) btnclose!: ElementRef;
  //@ViewChild('modal', {static: false}) modal!: ElementRef;

  @Input() title = "";
  @Input() target = ""
  @Input() buttoms: any[] = [];

  private buttomEvents: EventEmitter<boolean>[] = [];  
  public action: EventEmitter<boolean> = new EventEmitter();
  public show = false;
  
  constructor(private elRef: ElementRef) { }  

  ngOnInit(): void {
    this.buttoms.forEach(x=> {
      x.class = `btn ${x.class || ""}`; 
      this.buttomEvents.push(new EventEmitter());
    });
  }

  confirm = () => this.action.emit(true);
  
  cancel = () => this.action.emit(false);

  close = () => this.btnclose.nativeElement.click();

  public handle = (buttomName: string) => {
    const buttomIndex = this.buttoms.indexOf(buttomName);
    this.buttomEvents[buttomIndex].emit(true);
  }

  buttom = (buttom: any): EventEmitter<boolean> => {
    const buttomIndex = this.buttoms.findIndex(x=> x.name == buttom);
    return this.buttomEvents[buttomIndex];
  }
}
