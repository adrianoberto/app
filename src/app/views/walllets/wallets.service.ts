import { Injectable } from '@angular/core';
import { environment } from '@env/environment';

import { HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

import { 
  WalletAsset,
  Ticker,
  Stockbroker,
  ApiServiceService } from '@app/core';


@Injectable({
  providedIn: 'root'
})
export class StocksService {

  static httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }
  static readonly BASE_URL = environment.baseUrl;
  static readonly STOCKS = `${StocksService.BASE_URL}/tickers/:id`;
  static readonly STOCKBROKERS = `${StocksService.BASE_URL}/stockbrokers`;
  static readonly STOCKS_BY_WALLETID = `${StocksService.BASE_URL}/wallets/:id/stocks`

  constructor(private http: ApiServiceService) { }

  getTickers() {    
    return this.http.getRequestById<Ticker>(StocksService.STOCKS, "stock")
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }

  getStockbrokers() {    
    return this.http.getRequest<Stockbroker>(StocksService.STOCKBROKERS)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }

  getStocksByWalletId(walletId: string) {    
      return this.http.getRequestById<WalletAsset>(StocksService.STOCKS_BY_WALLETID, walletId)
        .pipe(
          retry(2),
          catchError(this.handleError)
        );
  }


  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Erro ocorreu no lado do client
      errorMessage = error.error.message;
    } else {
      // Erro ocorreu no lado do servidor
      errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  };
}
