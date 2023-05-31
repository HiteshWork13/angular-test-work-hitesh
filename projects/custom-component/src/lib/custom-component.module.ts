import { NgModule } from '@angular/core';
import { CustomComponentComponent } from './custom-component.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CustomComponentComponent
  ],
  imports: [
    FormsModule
  ],
  exports: [
    CustomComponentComponent
  ]
})
export class CustomComponentModule { }
