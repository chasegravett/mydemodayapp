import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { QuestionsComponent } from './questions/questions.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { ChooseComponent } from './choose/choose.component';
import { Questions20Component } from './questions20/questions20.component';
import { Questions30Component } from './questions30/questions30.component';
import { ChangeBgDirective } from './change-bg.directive';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    QuestionsComponent,
    HeaderComponent,
    ChooseComponent,
    Questions20Component,
    Questions30Component,
    ChangeBgDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
