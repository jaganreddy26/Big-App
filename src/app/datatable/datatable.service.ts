import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DataTableService{

  private url: string = 'https://api.github.com/users';
  constructor(private http: HttpClient, private router: Router) {

  }

  getData(){
      this.url=this.url;
      return this.http.get(this.url);
  }

}
