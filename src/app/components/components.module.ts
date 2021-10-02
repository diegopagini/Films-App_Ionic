import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from './spinner/spinner.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [SpinnerComponent],
  imports: [CommonModule, IonicModule],
  exports: [SpinnerComponent],
})
export class ComponentsModule {}
