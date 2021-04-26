// vendors
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_API } from 'src/app/constants/constants';
import { YearInterface } from 'src/app/models/dataResponse';

@Injectable({
  providedIn: 'root',
})
export class RestService {
  constructor(private _http: HttpClient) {}

  getData(): Promise<Array<YearInterface>> {
    return this._http.get<Array<YearInterface>>(URL_API).toPromise();
  }
}
