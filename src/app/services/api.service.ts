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

  sortBeers(beers: any[]) {

    return beers.sort((a: any, b: any) => {
      const yearA = +a.first_brewed.match(/\d{4}/g)[0];
      const yearB = +b.first_brewed.match(/\d{4}/g)[0];

      console.log(yearA, yearB);
  
      if (yearA > yearB) {
        return -1;
      }
      if (yearA < yearB) {
        return 1;
      }
      return 0;
    });
  }
}
