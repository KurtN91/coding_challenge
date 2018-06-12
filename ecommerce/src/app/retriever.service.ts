import { HttpClient } from '@angular/common/http'; 
import { HttpClientModule } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { item } from './store/store.model';

@Injectable({
  providedIn: 'root'
})
export class RetrieverService {

  public items: item[]

  constructor(private http: HttpClient) {
    this.getJSON().subscribe(data => {
         this.items = data as item[];
    })
    
    ;
}

public getJSON(): Observable<any> {
    return this.http.get("https://my.api.mockaroo.com/product_catalog.json?key=866ae800")
}
}