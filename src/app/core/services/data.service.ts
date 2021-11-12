import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() {
    this.wallet = "6071434be1db924aa0f2915d";
   }

  private _walletId: string = "";
  get walletId(): string {
    return this._walletId;
  }

  set wallet(value: string) {
    this._walletId = value;
  }
}
