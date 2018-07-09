import { Component, Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class WorldCupService {
    constructor(
      private http: Http
    ) {
      // this.getData();
    }

    private apiURL = 'http://api.football-data.org/v1/competitions/467/fixtures';



  getData() {
    const headers = new Headers();
        headers.append('X-Response-Control', 'full');
        headers.append('X-Auth-Token', '347ca98708044f48875f5e6fbe6ae2c0');

    return this.http.get(this.apiURL, {headers: headers})
      .map((res: Response) => res.json());
  }

  fetchData() {
    this.getData().subscribe(dat => {
    //   return Object.entries(dat.fixtures).filter(el => el[1]['status'] === 'TIMED');
      return dat.fixtures;
    });
  }
}
