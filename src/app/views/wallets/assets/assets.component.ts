import { Component, OnInit } from '@angular/core';
import { ServerResponse, Stockbroker, Ticker, WalletAsset } from '@app/core/models';
import { WalletsService } from '../wallets.service';
import { DataService } from '@app/core';

@Component({
  selector: 'app-assets',
  templateUrl: './assets.component.html',
  styleUrls: ['./assets.component.scss']
})
export class AssetsComponent implements OnInit {

  modalTitle = "Novo lançamento";
  assets: WalletAsset[] = [];
  tickers: Ticker[] = [];
  stockbrokers: Stockbroker[] = [];
  assetSelected!: WalletAsset;
  configLoadIsFinish: boolean = false;
  showModalEvents: boolean = false;


  constructor(private dataService: DataService, private stockService: WalletsService) { }

  ngOnInit(): void {
    this.loadAssetsByWalletId(this.dataService.walletId);
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
}
