import { Injectable } from '@angular/core';
import { environment } from '@env/environment';

import { HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Asset } from '../../core/models/asset.model';

import { 
  WalletAsset,
  Ticker,
  Stockbroker,
  ApiServiceService } from '@app/core';


@Injectable({
  providedIn: 'root'
})
export class WalletsService {

  static httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }
  static readonly BASE_URL = environment.baseUrl;
  static readonly STOCKS = `${WalletsService.BASE_URL}/tickers/:id`;
  static readonly STOCKBROKERS = `${WalletsService.BASE_URL}/stockbrokers`;
  static readonly STOCKS_BY_WALLETID = `${WalletsService.BASE_URL}/wallets/:id/stocks`
  static readonly TRANSACTIONS_BY_WALLETID = `${WalletsService.BASE_URL}/wallets/:id/transactions`
  static readonly ADD_ASSET_TO_WALLETID = `${WalletsService.BASE_URL}/wallets/:id/assets`
  static readonly ADD_ASSET_TO_WALLETID_AND_TRADINGCODE = `${WalletsService.BASE_URL}/wallets/:id/transactions/:tradingCode`

  constructor(private http: ApiServiceService) { }

  getTickers() {    
    return this.http.getRequest<Ticker>(WalletsService.STOCKS, "stock")
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }

  getStockbrokers() {    
    return this.http.getRequest<Stockbroker>(WalletsService.STOCKBROKERS)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }

  getStocksByWalletId(walletId: string) {    
    return this.http.getRequest<WalletAsset>(WalletsService.STOCKS_BY_WALLETID, walletId)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }

  getTransactionsByWalletId(walletId: string) {
    return this.http.getRequest<any>(WalletsService.TRANSACTIONS_BY_WALLETID, walletId)
    .pipe(
      retry(2),
      catchError(this.handleError)
    );
  }

  getTransactionsByWalletIdAndTradingCode(walletId: string, tradingCode: string) {

    let params = [
      { name: 'id', value: walletId },
      { name: 'tradingCode', value: tradingCode }
    ];

    return this.http.getRequestWithParams<any>(WalletsService.ADD_ASSET_TO_WALLETID_AND_TRADINGCODE, params)
    .pipe(
      retry(2),
      catchError(this.handleError)
    );
  }


  addAssetToWallet(walletId: string, asset: Asset) {
    return this.http.postRequest(WalletsService.ADD_ASSET_TO_WALLETID, asset, walletId)
      .pipe(        
        catchError(this.handleError));
  }


  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Erro ocorreu no lado do client
      errorMessage = error.error.message;
    } else {
      // Erro ocorreu no lado do servidor
      errorMessage = `C??digo do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  };
}
