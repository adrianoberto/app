import { Component, OnInit } from '@angular/core';
import { WalletAsset } from '../../../core/models/WalletAsset';
import { StocksService } from './stocks.service';

@Component({
  selector: 'app-stocks',
  templateUrl: './stocks.component.html',
  styleUrls: ['./stocks.component.scss']
})
export class StocksComponent implements OnInit {

  assets: WalletAsset[] = []; 

  constructor(private stockService: StocksService) { }

  ngOnInit(): void {
    this.stockService
      .getStocks("6071434be1db924aa0f2915d")
      .subscribe(response => {
        this.assets = response.data;
      });
  }
}
