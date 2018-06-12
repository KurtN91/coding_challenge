import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatGridListModule } from '@angular/material/grid-list';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { MatToolbarModule } from '@angular/material/toolbar';


import { AppComponent } from './app.component';
import { StoreComponent } from './store/store.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'store',  pathMatch: 'full' },
  { path: 'store', component: StoreComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    StoreComponent,
  ],
  imports: [
    MatGridListModule,
    MatToolbarModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    ),
    HttpClientModule,
    BrowserModule
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
