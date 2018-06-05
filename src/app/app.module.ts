import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MainComponent } from './layout/main/main.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HomeComponent } from './home/home.component';


const appRoute: Routes = [
  {
    path: '',
    component:MainComponent,
    children:[{
      path : '',
      component:HomeComponent
    }]
  },
];

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoute,
      { enableTracing: true }
    ),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
