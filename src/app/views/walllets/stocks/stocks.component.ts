import { Component, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { WalletAsset, Ticker, Stockbroker, ServerResponse } from '@app/core';
import { StocksService } from '../wallets.service';


@Component({
  selector: 'app-stocks',
  templateUrl: './stocks.component.html',
  styleUrls: ['./stocks.component.scss']
})
export class StocksComponent implements OnInit {

  modalTitle = "Novo lançamento";
  assets: WalletAsset[] = [];
  tickers: Ticker[] = [];
  stockbrokers: Stockbroker[] = [];
  configLoadIsFinish: boolean = false;


  constructor(private stockService: StocksService) { }

  ngOnInit(): void {
    this.loadAssetsByWalletId("6071434be1db924aa0f2915d");
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
}
