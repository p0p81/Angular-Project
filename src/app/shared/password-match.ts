import { ValidatorFn } from '@angular/forms';
export function passwordMatchValidator(
  passwordControl: string,
  rePasswordControl: string
): ValidatorFn {
  return (control) => {
    const pass = control.get(passwordControl);
    const rePass = control.get(rePasswordControl);

    const hasMatched = pass?.value === rePass?.value;
    return hasMatched ? null : { passwordMatchValidator: true };
  };
}
