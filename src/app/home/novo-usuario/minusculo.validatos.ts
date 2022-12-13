import { AbstractControl } from "@angular/forms";

export const minusculoValidator = (control:AbstractControl) => {
    const valor = control.value as string;
    if(valor !== valor.toLowerCase()) {
        return { minusculo: true}
    }
    return null
}
