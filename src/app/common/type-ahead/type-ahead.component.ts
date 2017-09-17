import {Component, Input} from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
    selector: 'type-ahead',
    templateUrl: './type-ahead.component.html'
})

export class TypeAheadComponent{
    @Input() name: FormControl; 
    @Input() form: FormGroup;
}