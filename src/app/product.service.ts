import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Album } from './album';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: "root",
})
export class ProductService {
  private _albumUrl = "../assets/album.json";

  constructor(private _http: HttpClient) {}

  public getAlbum(id: number): Observable<Album> {
    return this._http
      .get(this._albumUrl)
      .pipe(map((response: Response) => <Album> response.json()));
  }
}
