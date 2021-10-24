import { Component, Inject, Input, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Ticker, Stockbroker, Asset } from '@app/core';
import { CustomModalComponent } from '../../../shared/components/custom-modal/custom-modal.component';
import { WalletsService } from '../wallets.service';

@Component({
  selector: 'app-register',
  templateUrl: './entry-register.component.html',
  styleUrls: ['./entry-register.component.scss']
})
export class EntryRegisterComponent implements OnInit {

  @Input() walletId = "";
  @Input() type = 'STOCKS';
  @Input() tickers: Ticker[] = [];
  @Input() stockbrokers: Stockbroker[] = [];

  tickerControl = new FormControl(null, Validators.required);
  stockbrokerControl = new FormControl(null, Validators.required);
  amountControl = new FormControl(null, Validators.required);
  unitPriceControl = new FormControl(null, Validators.required);
  tagControl = new FormControl(null);
  dateControl = new FormControl(null, Validators.required);

  constructor(
    @Inject(CustomModalComponent) private modal: CustomModalComponent,
    private walletsService: WalletsService
    ) { }

  ngOnInit(): void {
    this.loadControls();
    this.subscribeModal();
  }

  loadControls() {
    //this.amountControl.setValue(200); 
    this.tickerControl.setValue(null);
    this.stockbrokerControl.setValue(null);
  }

  subscribeModal() {
    this.modal.action.subscribe(result => {
      if(result) {
        this.save();
      }
    });
  }

  save() {   

    // if (!this.validate()) {
    //   console.log('invalido');
    //   return;
    // }

    const asset: Asset = {
      walletId: this.walletId,
      stockbroker: this.stockbrokerControl.value,
      ticker: this.tickerControl.value,
      tags: [],
      amount: this.amountControl.value,
      unitPrice: this.unitPriceControl.value,
      totalPrice: this.unitPriceControl.value * this.amountControl.value,
      date: `${this.dateControl.value}T03:00:00.000Z`,
      tradingType: 'buy'
    };
 
    this.walletsService
        .addAssetToWallet(this.walletId, asset)
        .subscribe(res => {
          this.modal.close();
        });

    // (this.isCreate)
    //   ? await this._create(this._dataService.wallletId, asset)
    //   : await this._edit(this._dataService.wallletId, asset);



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
