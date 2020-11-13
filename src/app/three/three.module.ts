import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThreeOneComponent } from './three-one/three-one.component';
import { ThreeTwoComponent } from './three-two/three-two.component';



@NgModule({
  declarations: [ThreeOneComponent, ThreeTwoComponent],
  imports: [
    CommonModule
  ],
  exports: [ThreeOneComponent, ThreeTwoComponent]
})
export class ThreeModule { }
