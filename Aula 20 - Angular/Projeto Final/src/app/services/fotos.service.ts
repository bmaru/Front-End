import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FotosService {
  private url: string = "https://dog.ceo/api/breed/";

  constructor(private http: HttpClient) { }

  public listar(raca: string): Observable<any> {
    return this.http.get<any>(`${this.url}${raca}/images`);
  }

}
