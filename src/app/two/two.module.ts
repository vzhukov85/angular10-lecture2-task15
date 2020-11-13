import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TwoOneComponent } from './two-one/two-one.component';



@NgModule({
  declarations: [TwoOneComponent],
  imports: [
    CommonModule
  ],
  exports: [TwoOneComponent]
})
export class TwoModule { }
