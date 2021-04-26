import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ChartsModule } from 'ng2-charts';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChartComponentComponent } from './components/chart-component/chart-component.component';
import { RestService } from './services/rest/rest.service';

@NgModule({
  declarations: [AppComponent, ChartComponentComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [RestService],
  bootstrap: [AppComponent],
})
export class AppModule {}
