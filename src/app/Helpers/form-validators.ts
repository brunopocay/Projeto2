import { AbstractControl, AsyncValidatorFn, ValidationErrors } from "@angular/forms";

export class FormValidators {

    static equalsTo(otherfield: string): AsyncValidatorFn {
        return (control: AbstractControl): Promise<ValidationErrors | null> => {
            return new Promise((resolve) => {
                const field = control.root.get(otherfield);

                if (!field || control.value !== field.value) 
                {
                    resolve({ equalsTo: otherfield });
                } 
                else 
                {
                    resolve(null);
                }
            });
        };
    }
}
