import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator } from '@angular/forms';

@Directive({
  selector: '[appValidator]',
  providers: [{ provide: NG_VALIDATORS, useExisting: ValidatorDirective, multi: true }]
})
export class ValidatorDirective implements Validator {

  constructor() { }
  @Input() appValidator: any
  validate(control: AbstractControl): { [key: string]: any } | null {
    const password = control.get(this.appValidator)
    if (password && password.value != control.value) {
      return { 'notEqual': true }
    }
    return null

  }


}
