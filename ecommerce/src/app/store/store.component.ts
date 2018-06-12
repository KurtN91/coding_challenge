import { Component, OnInit } from '@angular/core';
import { RetrieverService } from '../retriever.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { item } from './store.model';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

  public items: item[];

  constructor(
    private appSettingsService : RetrieverService 
) { }

ngOnInit(){
   this.appSettingsService.getJSON().subscribe(data => {
    this.items = data as item[];
    
    });


  }
}
