import { Component, Input, ChangeDetectionStrategy, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

const RADIO_CONTROL_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => TeslaWheelsComponent),
  multi: true
};

@Component({
  selector: 'tesla-wheels',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="tesla-wheels">
      <p class="tesla-wheels__title">Wheels</p>
      <div class="tesla-wheels__container cf">
        <label 
          *ngFor="let size of sizes;"
          class="tesla-wheels__item tesla-wheels__item--{{ size }}"
          [class.tesla-wheels__item--active]="value === size"
          [class.tesla-wheels__item--focused]="focused === size">
          <input 
            type="radio"
            name="wheelsize"
            [attr.value]="size"
            (blur)="onBlur(size)"
            (change)="onChange(size)"
            (focus)="onFocus(size)"
            [checked]="value === size">
          <p>
            {{ size }}"
          </p>
        </label>
      </div>
    </div>
  `,
  providers: [RADIO_CONTROL_ACCESSOR],
  styleUrls: ['./tesla-wheels.component.scss']
})
export class TeslaWheelsComponent implements ControlValueAccessor {
  constructor() {}
  private onModelChange: Function;
  private onTouch: Function;
  private value: string;
  private focused: string;
  private sizes: number[] = [19, 21];

  registerOnChange(fn: Function) {
    this.onModelChange = fn;
  }

  registerOnTouched(fn: Function) {
    this.onTouch = fn;
  }

  writeValue(value: string) {
    this.value = value;
  }

  private onChange(value: string) {
    this.value = value;
    this.onModelChange(value);
  }

  private onBlur(value: string) {
    this.focused = '';
  }

  private onFocus(value: string) {
    this.focused = value;
    this.onTouch();
  }
}