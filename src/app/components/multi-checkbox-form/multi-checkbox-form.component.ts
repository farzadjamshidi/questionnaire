import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Choice } from 'src/app/models/question.model';

@Component({
  selector: 'app-multi-checkbox-form',
  templateUrl: './multi-checkbox-form.component.html',
  styleUrls: ['./multi-checkbox-form.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => MultiCheckBoxFormComponent),
      multi: true
    }
  ]
})

export class MultiCheckBoxFormComponent implements ControlValueAccessor
{
  @Input() disabled?: boolean = false;

  choices!: Choice[];

  constructor(
  ) { }

  _onChange = (newChoices: Choice[]) => { };

  updateAllComplete()
  {
    this._onChange(this.choices);
  }

  writeValue(choices: Choice[]): void
  {
    this.choices = choices;
  }

  registerOnChange(fn: any): void
  {
    this._onChange = fn;
  }

  registerOnTouched(fn: any): void
  {
  }

  setDisabledState(isDisabled: boolean): void
  {
    this.disabled = isDisabled;
  }
}
