import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TesteService {

  static readonly BASE_URL = environment.baseUrl;

  static readonly ASSETS = `${TesteService.BASE_URL}/assets`

  constructor() { }

  // this,http.get(TesteService.ASSETS)
}
