import { Component, Input, OnInit } from '@angular/core';
import { WalletAsset, TradingTypeValue } from '@app/core';

@Component({
  selector: 'app-resume-transactions',
  templateUrl: './resume-transactions.component.html',
  styleUrls: ['./resume-transactions.component.scss']
})
export class ResumeTransactionsComponent implements OnInit {

  @Input() asset!: WalletAsset;

  constructor() { }

  ngOnInit(): void {
  }

  getTradingType(value: string) {
    return TradingTypeValue(value);
  }
}
