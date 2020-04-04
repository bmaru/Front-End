import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CollectionsService {
  private url: string = "https://dog.ceo/api/breeds/list/all";

  constructor(private http: HttpClient) { }

  public listar(): Observable<any> {
    return this.http.get<any>(this.url);
  }
}
