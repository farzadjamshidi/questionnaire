import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderModule } from './header/header.module';
import { HomeModule } from './main/home/home.module';
import { QuestionsModule } from './main/questions/questions.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HeaderModule,
    HomeModule,
    QuestionsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
