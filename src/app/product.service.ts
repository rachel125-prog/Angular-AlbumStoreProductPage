import { Injectable } from '@angular/core';
import {Http, Response } from '@angular/Http';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { map } from 'rxjs/operators';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private _albumUrl = '../assets/album.json';

  constructor(private _http: HttpClient) { }

  public getAlbum(id: number) {
    return this._http.get(this._albumUrl).pipe(map((response:Response)=> response.json()));
  }
}
