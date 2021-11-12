import { Component, Inject, Input, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Ticker, Stockbroker, Asset } from '@app/core';
import { CustomModalComponent } from '@app/shared';
import { WalletsService } from '@app/views/wallets/wallets.service';

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

  tradingType: string = "buy";

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
    this.modal.buttom("Cancelar").subscribe(() => this.modal.close());
    this.modal.buttom("Confirmar").subscribe(() => this.save());
  }

  save() {

    if (!this.validate()) {
      console.log('invalido');
      return;
    }

    const asset: Asset = {
      walletId: this.walletId,
      stockbroker: this.stockbrokerControl.value,
      ticker: this.tickerControl.value,
      tags: [],
      amount: this.amountControl.value,
      unitPrice: this.unitPriceControl.value,
      totalPrice: this.unitPriceControl.value * this.amountControl.value,
      date: `${this.dateControl.value}T03:00:00.000Z`,
      tradingType: this.tradingType
    };
 
    this.walletsService
        .addAssetToWallet(this.walletId, asset)
        .subscribe(res => {
          this.modal.close();
        });

    this.modal.close();
  }

  validate() {
    return (this.amountControl.valid &&
      this.tickerControl.valid &&
      this.stockbrokerControl.valid &&
      this.unitPriceControl.valid &&
      this.dateControl.valid);
  }

  selectTradingType = (tradingType: string) =>  this.tradingType = tradingType;
}
