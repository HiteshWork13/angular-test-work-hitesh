import { Component, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'lib-custom-component',
  template: `
    <input [(ngModel)]="value" [disabled]="disabled" (input)="onInput(value)"/>
  `,
  styles: [],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: CustomComponentComponent
    }
  ]
})
export class CustomComponentComponent implements OnInit, ControlValueAccessor {

  value = '';

  touched = false;

  disabled = false;

  constructor() { }

  ngOnInit(): void {
  }

  writeValue(newValue: string) {
    this.value = newValue;
  }

  onInput(value: string) {
    console.log("value", value);
    this.onChange(value);
  }

  onChange = (value: string) => {
  };


  registerOnChange(onChange: any) {
    this.onChange = onChange;
  }

  registerOnTouched(onTouched: any) {
    this.onTouched = onTouched;
  }

  onTouched = () => { };

  markAsTouched() {
    if (!this.touched) {
      this.onTouched();
      this.touched = true;
    }
  }

  setDisabledState(disabled: boolean) {
    this.disabled = disabled;
  }

}
