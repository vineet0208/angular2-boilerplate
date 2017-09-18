import {Component, Input, Output,
        EventEmitter, ViewChild, 
        ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
    selector: 'date-picker',
    styleUrls: ['./date-picker.component.css'],
    encapsulation: ViewEncapsulation.None,
    templateUrl:'./date-picker.component.html'
})

export class DatePickerComponent{
    @Input() date: FormControl = void 0; 
    @Input() form: FormGroup;

    @ViewChild('datePicker') datePicker;
    @ViewChild('dateInput') dateInput;

    private dateSelected(date):void{
        this.datePicker.hide();
    }
}