import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
    selector: '[maCouleur]'
})

export class MycolorDirective {
    public myElement: ElementRef

    @HostListener('window:keydown', ['$event'])
    handleKeyDown(event: KeyboardEvent) {
        
        switch(event.key){
            case 'ArrowDown': {
                this.myElement.nativeElement.style.color = 'red';
                break;
            }
            case 'ArrowUp': {
                this.myElement.nativeElement.style.color = 'green';
                break;
            }
            case 'ArrowRight': {
                this.myElement.nativeElement.style.color = 'blue';
                break;
            }
            case 'ArrowLeft': {
                this.myElement.nativeElement.style.color = 'black';
                break;
            }
        }
        
        console.log(event.key);
    }

    constructor(el: ElementRef) {
        this.myElement = el;
        //el.nativeElement.style.color = 'red';
    }
}