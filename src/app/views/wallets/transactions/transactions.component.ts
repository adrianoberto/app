import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TradingTypeValue } from '@app/core';
import { WalletsService } from '../../wallets/wallets.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent implements OnInit {

  walletId = "6071434be1db924aa0f2915d";
  transactions: any[] = [];

  constructor(private stockService: WalletsService, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.route.params.subscribe(params => {      

      console.log(params);

      if(params && params.assetName) {
        this.stockService.getTransactionsByWalletIdAndTradingCode(this.walletId, params.assetName).subscribe(data => {
          this.transactions = data.data;
        });
      } else {
        this.stockService.getTransactionsByWalletId(this.walletId).subscribe(data => {
          this.transactions = data.data;
        });
      }
    });
  }

  getTradingType(value: string) {
    return TradingTypeValue(value);
  }
}
