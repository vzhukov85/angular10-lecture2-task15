import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThreeOneComponent } from './three-one/three-one.component';
import { ThreeTwoComponent } from './three-two/three-two.component';
import { TwoModule } from '../two/two.module';



@NgModule({
  declarations: [ThreeOneComponent, ThreeTwoComponent],
  imports: [
    CommonModule,
    TwoModule,
  ],
  exports: [ThreeOneComponent, ThreeTwoComponent]
})
export class ThreeModule { }
