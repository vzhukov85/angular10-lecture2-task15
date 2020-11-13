import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FourOneComponent } from './four-one/four-one.component';
import { FourTwoComponent } from './four-two/four-two.component';
import { FourThreeComponent } from './four-three/four-three.component';



@NgModule({
  declarations: [FourOneComponent, FourTwoComponent, FourThreeComponent],
  imports: [
    CommonModule
  ],
  exports: [FourOneComponent, FourTwoComponent, FourThreeComponent]
})
export class FourModule { }
