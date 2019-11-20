import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [HeaderComponent],
  imports: [BrowserModule, HttpClientModule],
  exports: [
    BrowserModule,
    HttpClientModule,
    HeaderComponent
  ]
})
export class CoreModule {}
