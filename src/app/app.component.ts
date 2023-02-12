import { Component } from '@angular/core';
import { ApiService } from './services/api.service';

interface BeerData {
  image: string;
  name: string;
  first_brewed: string;
  description: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'iBeer';

  beersData: BeerData[] = [];

  constructor(private beers: ApiService) { }

  ngOnInit() {
    this.beers.getBeers().subscribe((data: any) => {
      this.beersData = data.map((beer: any) => {
        return {
          image: beer.image_url,
          name: beer.name,
          first_brewed: beer.first_brewed,
          description: beer.description
        };
      });
    });
  }

  sortBeers() {
    this.beers.getBeers().subscribe((data: any) => {
      this.beersData = this.beers.sortBeers(data);
    });

}
}