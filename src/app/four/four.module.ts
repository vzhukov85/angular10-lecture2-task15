import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FourOneComponent } from './four-one/four-one.component';
import { FourTwoComponent } from './four-two/four-two.component';
import { FourThreeComponent } from './four-three/four-three.component';
import { ThreeModule } from '../three/three.module';



@NgModule({
  declarations: [FourOneComponent, FourTwoComponent, FourThreeComponent],
  imports: [
    CommonModule,
    ThreeModule,
  ],
  exports: [FourOneComponent, FourTwoComponent, FourThreeComponent]
})
export class FourModule { }
