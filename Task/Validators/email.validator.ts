import { AbstractControl } from "@angular/forms";

export function EmailValidator(control:AbstractControl){
    const val = control.value;
    const reg = /^(.+)@(.+)$/;
    const valid = reg.test(val);
    if(valid){
        return null;
    }else{
        return {"invalidEmail" : {value: control.value}};
    }
}