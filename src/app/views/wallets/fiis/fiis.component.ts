import { Component, OnInit } from '@angular/core';
import { FiisService } from './fiis.service';
import { WalletAsset, Ticker, Stockbroker, ServerResponse } from '@app/core';


@Component({
  selector: 'app-fiis',
  templateUrl: './fiis.component.html',
  styleUrls: ['./fiis.component.scss']
})
export class FiisComponent implements OnInit {

  assets: WalletAsset[] = [];
  modalTitle = "Novo lançamento";
  walletId = "6071434be1db924aa0f2915d";
  tickers: Ticker[] = [];
  stockbrokers: Stockbroker[] = [];
  configLoadIsFinish: boolean = false;

  constructor(private stockService: FiisService) { }

  ngOnInit(): void {
    this.stockService
      .getStocks("6071434be1db924aa0f2915d")
      .subscribe(response => {
        this.assets = response.data;
      });
  }
}
