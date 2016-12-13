import { Component, Input, ChangeDetectionStrategy, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

const NUMBER_CONTROL_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => TeslaCounterComponent),
  multi: true
};

@Component({
  selector: 'tesla-counter',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="tesla-counter">
      <p class="tesla-counter__title">{{ title }}</p>
      <div class="tesla-counter__container cf">
        <div 
          class="tesla-counter__item"
          (keydown)="onKeyUp($event)"
          (blur)="onBlur($event)"
          (focus)="onFocus($event)"
          tabindex="0">
          <p class="tesla-counter__number">
            {{ value }}
            <span>{{ unit }}</span>
          </p>
          <div class="tesla-counter__controls" tabindex="-1">
            <button tabindex="-1" (click)="increment()" [disabled]="value === max"></button>
            <button tabindex="-1" (click)="decrement()" [disabled]="value === min"></button>
          </div>
        </div>
      </div>
    </div>
  `,
  providers: [NUMBER_CONTROL_ACCESSOR],
  styleUrls: ['./tesla-counter.component.scss']
})
export class TeslaCounterComponent implements ControlValueAccessor {
  @Input() step: number = 1;
  @Input() min: number;
  @Input() max: number;

  @Input() title: string = '';
  @Input() unit: string = '';

  value: number;
  focused: boolean;

  private onTouch: Function;
  private onModelChange: Function;

  private onChange(value: number) {
    this.value = value;
    this.onModelChange(value);
  }

  increment() {
    if (this.value < this.max) {
      this.onChange(this.value + this.step);
    }
    this.onTouch();
  }
  decrement() {
    if (this.value > this.min) {
      this.onChange(this.value - this.step);
    }
    this.onTouch();
  }

  registerOnChange(fn: Function) {
    this.onModelChange = fn;
  }

  registerOnTouched(fn: Function) {
    this.onTouch = fn;
  }

  writeValue(value: number) {
    this.value = value;
  }

  private onBlur(event: FocusEvent) {
    this.focused = false;
    event.preventDefault();
    event.stopPropagation();
  }

  private onKeyUp(event: KeyboardEvent) {
    let handlers = {
      ArrowDown: () => this.decrement(),
      ArrowUp: () => this.increment()
    };

    if (handlers[event.code]) {
      handlers[event.code]();
      event.preventDefault();
      event.stopPropagation();
    }
  }

  private onFocus(event: FocusEvent) {
    this.focused = true;
    event.preventDefault();
    event.stopPropagation();
  }

}
