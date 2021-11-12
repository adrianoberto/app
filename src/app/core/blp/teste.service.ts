import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { ApiServiceService } from '../core/services/api-service.service';

@Injectable({
  providedIn: 'root'
})
// export class TesteService {

//   static readonly BASE_URL = environment.baseUrl;

//   static readonly ASSETS = `${TesteService.BASE_URL}/assets`

//   constructor(public http: ApiServiceService) { }

//   // this,http.get(TesteService.ASSETS)

//   getAllAssetsWithPaging(start= 0, limit= 100) {
//     return this.http
//       .getRequest<any[]>(TesteService.ASSETS, { start: start, limit: limit });
//   }

//   getById(id: number) {
//     return this.http.getRequest<any>(`${TesteService.ASSETS}/id`)
//   }
// }

export class TesteService {

  static readonly BASE_URL = environment.baseUrl;

  static readonly ASSETS = `${TesteService.BASE_URL}/assets`

  constructor(public http: ApiServiceService) { }

  // this,http.get(TesteService.ASSETS)

  getAllAssetsWithPaging(start= 0, limit= 100) {
    return this.http
      .getRequest<any[]>(TesteService.ASSETS, { start: start, limit: limit });
  }

  getById(id: number) {
    return this.http.getRequest<any>(`${TesteService.ASSETS}/id`)
  }
}
