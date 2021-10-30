import { Component, Inject, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WalletAsset, TradingTypeValue } from '@app/core';
import { CustomModalComponent } from '@app/shared';

@Component({
  selector: 'app-resume-transactions',
  templateUrl: './resume-transactions.component.html',
  styleUrls: ['./resume-transactions.component.scss']
})
export class ResumeTransactionsComponent implements OnInit {

  @Input() walletId!: string;
  @Input() asset!: WalletAsset;

  constructor(
      @Inject(CustomModalComponent) private modal: CustomModalComponent, 
      private router: Router) { }

  ngOnInit(): void {
    this.subscribeModal();
  }

  subscribeModal() {
    this.modal.buttom("alterar").subscribe(() => {
      this.modal.close();
      this.router.navigate(["wallets", this.walletId, "transactions", this.asset._id]);
    });
  }
  getTradingType(value: string) {
    return TradingTypeValue(value);
  }
}
