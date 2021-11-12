import { Injectable } from '@angular/core';
import { environment } from '@env/environment';

import { HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

import { 
  WalletAsset,
  ApiServiceService } from '@app/core';


@Injectable({
  providedIn: 'root'
})
export class FiisService {
  
  static httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }
  static readonly BASE_URL = environment.baseUrl;
  static readonly FIIS = `${FiisService.BASE_URL}/wallets/:id/fiis`

  constructor(private http: ApiServiceService) { }

  getStocks(walletId: string) {    
      return this.http.getRequest<WalletAsset>(FiisService.FIIS, walletId)
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