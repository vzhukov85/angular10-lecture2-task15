import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TwoOneComponent } from './two-one/two-one.component';
import { OneModule } from '../one/one.module';



@NgModule({
  declarations: [TwoOneComponent],
  imports: [
    CommonModule,
    OneModule
  ],
  exports: [TwoOneComponent]
})
export class TwoModule { }
