// import { Directive } from '@angular/core';
// import { NG_VALIDATORS, AbstractControl, Validator, ValidationErrors, ValidatorFn } from '@angular/forms';

// export function emailValidator(): ValidatorFn {

//   const EMAIL_REGEXP = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

//   return (control: AbstractControl): ValidationErrors | null => {
//     const isValid = EMAIL_REGEXP.test(control.value);

//     if (isValid) {
//       return null;
//     } else {
//       return {
//         emailValidator: {
//           valid: false,
//         },
//       };
//     }
//   };

// }

// @Directive({
//   selector: '[appEmailValidator]',
//   providers: [{
//     provide: NG_VALIDATORS,
//     useExisting: EmailValidatorDirective,
//     multi: true,
//   }],
// })
// export class EmailValidatorDirective implements Validator {

//   constructor() {
//   }

//   public validate(control: AbstractControl): ValidationErrors | null {
//     return emailValidator()(control);
//   }

// }


// import { FormGroup } from '@angular/forms';

// // custom validator to check that two fields match
// export function MustMatch(controlName: string, matchingControlName: string) {
//     return (formGroup: FormGroup) => {
//         const control = formGroup.controls[controlName];
//         const matchingControl = formGroup.controls[matchingControlName];

//         if (matchingControl.errors && !matchingControl.errors.mustMatch) {
//             // return if another validator has already found an error on the matchingControl
//             return;
//         }

//         // set error on matchingControl if validation fails
//         if (control.value !== matchingControl.value) {
//             matchingControl.setErrors({ mustMatch: true });
//         } else {
//             matchingControl.setErrors(null);
//         }
//     }
// }
