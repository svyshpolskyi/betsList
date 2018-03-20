import { Directive, OnInit, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive ({
    selector: '[appMenuItemHighlight]'
})
 export class MenuHighlightDirective implements OnInit {
     @HostBinding('style.backgroundColor') backgroundColor: string;
     constructor (private elRef: ElementRef) {}
     ngOnInit() {}
     @HostListener('mouseover') mouseover() {
         this.backgroundColor = 'red';
     }

     @HostListener('mouseleave') mouseleave() {
        this.backgroundColor = 'transparent';
    }
 }
