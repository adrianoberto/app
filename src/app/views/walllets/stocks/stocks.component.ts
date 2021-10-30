import { Component,  OnInit } from '@angular/core';
import { TradingType, TradingTypeValue, WalletAsset, Ticker, Stockbroker, ServerResponse } from '@app/core';
import { WalletsService } from '../wallets.service';


@Component({
  selector: 'app-stocks',
  templateUrl: './stocks.component.html',
  styleUrls: ['./stocks.component.scss']
})
export class StocksComponent implements OnInit {

  modalTitle = "Novo lançamento";
  walletId = "6071434be1db924aa0f2915d";
  assets: WalletAsset[] = [];
  tickers: Ticker[] = [];
  stockbrokers: Stockbroker[] = [];
  assetSelected!: WalletAsset;
  configLoadIsFinish: boolean = false;
  showModalEvents: boolean = false;


  constructor(private stockService: WalletsService) { }

  ngOnInit(): void {
    this.loadAssetsByWalletId(this.walletId);
    this.loadConfigs();
  }

  loadConfigs = () =>
    Promise.all([
      this.loadAllTickers(),
      this.loadAllStockbrokers()   
    ]).then((results: ServerResponse<any>[]) => {
      this.tickers = results[0]?.data;
      this.stockbrokers = results[1]?.data;
      this.configLoadIsFinish = true;
    });

  loadAllTickers = () =>
    this.stockService
      .getTickers()
      .toPromise();

  loadAllStockbrokers = () =>
      this.stockService
        .getStockbrokers()
        .toPromise();

  // loadAllTickers() {
  //   this.stockService
  //     .getTickers()
  //     .subscribe(tickers => this.tickers = tickers.data);
  // }

  loadAssetsByWalletId(walletId: string) {
    this.stockService
      .getStocksByWalletId(walletId)
      .subscribe(response => {
        this.assets = response.data;
      });
  }

  viewEvents(asset: WalletAsset) {
    this.modalTitle = "Transações";
    this.assetSelected = asset;    
    this.showModalEvents = true;
  }

  getTradingType(value: string) {
    return TradingTypeValue(value);
  }
}
