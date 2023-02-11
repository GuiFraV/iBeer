import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private url = 'https://api.punkapi.com/v2/beers';
  constructor(private client:HttpClient) { }

  getBeers() {
    return this.client.get(this.url);
  }
}
