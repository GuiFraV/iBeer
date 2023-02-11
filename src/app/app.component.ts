import { Component } from '@angular/core';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'iBeer';
  beer:any;

  constructor(private  beers:ApiService) {
    


  }

  ngOnInit() {
    this.beers.getBeers().subscribe(data => {
      this.beer = data;
      console.log(this.beer);
    });
  }


}
