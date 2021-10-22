import { HttpClient } from '@angular/common/http';
import { TesteService } from './teste.service';

export class CRUDService<T> {
    constructor(public http: HttpClient, private API_URL: string) { }

    load() {
        return this.http.get<T[]>(this.API_URL)
    }

    create(record: T) {
        return this.http.post<any>(this.API_URL, record);
    }

    update(record: T) {
        // return this.http.put<any>(`${this.API_URL}/${record.id}`, record);
    }

    remove(id: string) {
        this.http.delete(`${this.API_URL}/${id}`);
    }
}