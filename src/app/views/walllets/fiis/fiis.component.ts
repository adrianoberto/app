import { Component, OnInit } from '@angular/core';
import { WalletAsset } from '../../../core/models/WalletAsset';
import { FiisService } from './fiis.service';


@Component({
  selector: 'app-fiis',
  templateUrl: './fiis.component.html',
  styleUrls: ['./fiis.component.scss']
})
export class FiisComponent implements OnInit {

  assets: WalletAsset[] = []; 

  constructor(private stockService: FiisService) { }

  ngOnInit(): void {
    this.stockService
      .getStocks("6071434be1db924aa0f2915d")
      .subscribe(response => {
        this.assets = response.data;
      });
  }
}
