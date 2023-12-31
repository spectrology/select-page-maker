import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormService } from '../../form.service';
import { DataService } from '../../data.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  constructor(
    public formsService: FormService,
    public dataService: DataService
  ) { }

  @Input() formStructure: any;
  @Input() formInitialData: any;
  @Input() formTitle: any;
  @Output() formSaved: EventEmitter<any> = new EventEmitter();

  ngOnInit() {
    this.genForm = this.formsService.formGenerator(this.formStructure, this.formInitialData)
  }

  genForm: FormGroup = new FormGroup({});

  keys(obj: any) {
    return Object.keys(obj)
  }

  typeof(obj: any) {
    return typeof obj
  }


  saveChanges(value: any) {
    this.formSaved.emit(this.genForm.value)
  }
}
