import {Directive, ElementRef, 
        HostListener, Input} from '@angular/core';

@Directive({
    selector:'[NumberOnly]'
})
export class NumberOnlyDirective{
    constructor(private el: ElementRef){}

    @Input() NumberOnly: boolean;

    @HostListener('keypress', ['$event']) onKeyPress(event){
        let e: any = <KeyboardEvent> event;
        if(this.NumberOnly){
            let charCode = (e.which)? e.which:event.keyCode;
            let value = e && e.target && e.target.value;
            if(charCode!=46 && charCode>31 && 
                (charCode<48 || charCode>57)){
                return false;
            }else{
                return true;
            }
        }
    }
}