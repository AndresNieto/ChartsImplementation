import { Component } from '@angular/core';
import { YearInterface } from './models/dataResponse';
import { RestService } from './services/rest/rest.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  public yearSelected = '';
  public dataFromAPI : Array<YearInterface> = [];
  public yearsList = [];

  public hasError = false;

  constructor(private _restService: RestService) {}

  ngOnInit(): void {    
    this.fetchData();
  }

  private fetchData = async () => {
    try {
      const data = await this._restService.getData();
      this.dataFromAPI = data;
      this.getYearsList();
    } catch (error) {
      this.hasError = true;
    }
  };

  private getYearsList = () => {
    this.dataFromAPI.map(({ year }) => this.yearsList.push(year));
  };;
}
