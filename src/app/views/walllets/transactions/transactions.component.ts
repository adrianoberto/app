import { Component, OnInit } from '@angular/core';
import { TradingTypeValue } from '@app/core';
import { WalletsService } from '../wallets.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent implements OnInit {

  walletId = "6071434be1db924aa0f2915d";
  transactions: any[] = [];

  constructor(private stockService: WalletsService) { }

  ngOnInit(): void {
    this.stockService.getTransactionsByWalletId(this.walletId).subscribe(data => {
      this.transactions = data.data;
    });
  }

  getTradingType(value: string) {
    return TradingTypeValue(value);
  }
}
