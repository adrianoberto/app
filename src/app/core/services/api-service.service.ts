import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { ServerResponse } from '@my-project/models/models.module';
import { Observable } from 'rxjs';
import { ServerResponse } from '../models/server-response.model';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(public http: HttpClient) { }

  getRequest<T>(url: string, id?: string) {
    url = id ? url.replace(':id', id) : url;
    return this.http.get<ServerResponse<T>>(url);
  }

  getRequestWithParams<T>(url: string, params: any[]) {
    url = this.getQueryParams(url, params);
    return this.http.get<ServerResponse<T>>(url);
  }

  postRequest(url: string, body: any, id?: string) {
    url = id ? url.replace(':id', id) : url;
    return this.http.post(url, body);
  }

  private getQueryParams(url: string, params: any[]): any {
    if(!params) return url;

    for(let param of params) {
      url = param ? url.replace(`:${param.name}`, param.value) : url;
    }
    return url;
  }

  downloadFile(url: string, params?: any) {
    // logica para o download
  }

  // uploadFile(file: AppFile | AppFile[], body? any, params?: any) {
  //   // logica para o upload
  // }
}
