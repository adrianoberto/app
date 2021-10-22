import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { ServerResponse } from '@my-project/models/models.module';
import { Observable } from 'rxjs';
import { ServerResponse } from '../models/ServerResponse';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(public http: HttpClient) { }

  getRequest<T>(url: string, params?: any) {
    // return this.http.get<ServerResponse<T>>(url, {
    //   params: this.getQueryParams(params)
    // });
    //.take(1)
  }

  getRequestById<T>(url: string, id: string, params?: any): Observable<ServerResponse<T>> {
    url = url.replace(':id', id);
    let p = {};
    return this.http.get<ServerResponse<T>>(url);
    // return this.http.get<ServerResponse<T>>(url, { 
    //   params: this.getQueryParams(params)
    // });
  }

  postRequest(url: string, body: any) {
    // POST
  }

  private getQueryParams(params: any): any {
    return "";
  }

  downloadFile(url: string, params?: any) {
    // logica para o download
  }

  // uploadFile(file: AppFile | AppFile[], body? any, params?: any) {
  //   // logica para o upload
  // }
}
