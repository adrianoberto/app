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

  getRequest<T>(url: string, id?: string) {
    url = id ? url.replace(':id', id) : url;
    return this.http.get<ServerResponse<T>>(url);
  }

  postRequest(url: string, body: any, id?: string) {
    url = id ? url.replace(':id', id) : url;
    return this.http.post(url, body);
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
