import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-app';

  statData: any;
  statDataFrequencies: any;

  constructor(private dataService: DataService) {
    
  }

  ngOnInit() {

    this.dataService.GetStats()
      .subscribe(resultData => {
        console.log(resultData);
        this.statData = JSON.parse(JSON.stringify(resultData));

        this.statDataFrequencies = this.statData.results.frequencies
          .sort((a, b) => parseFloat(a.range) - parseFloat(b.range));
      });

  }
}
