import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { OneModule } from './one/one.module';
import { TwoModule } from './two/two.module';
import { ThreeModule } from './three/three.module';
import { FourModule } from './four/four.module';
import { FiveModule } from './five/five.module';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    OneModule,
    TwoModule,
    ThreeModule,
    FourModule,
    FiveModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
