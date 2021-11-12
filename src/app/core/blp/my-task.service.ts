import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MyTask } from '@my-project/core/models/MyTask';

import { API } from '../core/services/API';
import { CRUDService } from './CRUD.service';

@Injectable({
  providedIn: 'root'
})
export class MyTaskService extends CRUDService<MyTask> {

  constructor(public http: HttpClient) { 
    super(http, API.TASKS_URL);
  }
}
