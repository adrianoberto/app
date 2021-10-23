import { Component, Inject, Input, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Ticker, Stockbroker } from '@app/core';
import { CustomModalComponent } from '../../../shared/components/custom-modal/custom-modal.component';

@Component({
  selector: 'app-register',
  templateUrl: './entry-register.component.html',
  styleUrls: ['./entry-register.component.scss']
})
export class EntryRegisterComponent implements OnInit {

  @Input() type = 'STOCKS';
  @Input() tickers: Ticker[] = [];
  @Input() stockbrokers: Stockbroker[] = [];

  tickerControl = new FormControl(null, Validators.required);
  stockbrokerControl = new FormControl(null, Validators.required);
  amountControl = new FormControl(null, Validators.required);
  unitPriceControl = new FormControl(null, Validators.required);
  tagControl = new FormControl(null);
  dateControl = new FormControl(null, Validators.required);

  constructor(@Inject(CustomModalComponent) private modal: CustomModalComponent) { }

  ngOnInit(): void {
    this.loadControls();
    this.subscribeModal();
  }

  loadControls() {
    //this.amountControl.setValue(200);
    this.stockbrokerControl.setValue(0);
  }

  subscribeModal() {
    this.modal.action.subscribe(result => {
      if(result) {
        this.save();
      }
    });
  }

  save() {    

    //console.log(this.stockbrokerControl.value);
    

    // if (!this.validate()) {
    //   console.log('invalido');
    //   return;
    // }

    var asset = {
      _id: undefined, //(this.isCreate) ? undefined : this.data.asset._id,
      stockbroker: {
        _id: this.stockbrokerControl.value._id,
        shortName:  this.stockbrokerControl.value.shortName,
      },
    //   ticker: this.tickerControl.value,
    //   tags: this.tags, //this.tagControl.value,
    //   amount: this.amountControl.value,
    //   unitPrice: this.unitPriceControl.value,
    //   totalPrice: this.unitPriceControl.value * this.amountControl.value,
    //   date: this.dateControl.value
    };
 
    // (this.isCreate)
    //   ? await this._create(this._dataService.wallletId, asset)
    //   : await this._edit(this._dataService.wallletId, asset);

    console.log(asset);

    //this.modal.close();
  }

  validate() {
    return (this.amountControl.valid &&
      this.tickerControl.valid &&
      this.stockbrokerControl.valid &&
      this.unitPriceControl.valid &&
      this.dateControl.valid);
  }
}
