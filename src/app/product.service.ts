import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Album } from './album';
import { Observable } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: "root",
})
export class ProductService {
  private _albumUrl = "../assets/album.json";
  private _productsUrl = "../assets/products.json";

  constructor(private _http: HttpClient) {}

  public getAlbum(id: number): Observable<Album> {
    return this._http
      .get(this._albumUrl)
      .map((response) => <Album>response.json());
  }

  public getProducts(): Observable<Product[]> {
    return this._http
      .get(this._productsUrl)
      .map((response) => <Product[]>response.json());
  }
}
