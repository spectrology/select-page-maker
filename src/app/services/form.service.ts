import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor() { }

  // Takes an object and creates a form
  formGenerator(dataObject: any, data?: any) {
    const formGroup = new FormGroup({})
    for (let attr of Object.keys(dataObject)) {
      if (typeof dataObject[attr] === 'object') {
        formGroup.addControl(attr, this.formGenerator(dataObject[attr], data ? data[attr] : null))
      } else {
        formGroup.addControl(attr, new FormControl(data ? data[attr] : ''))
      }
    }
    console.log(formGroup.value)
    return formGroup
  }
}
