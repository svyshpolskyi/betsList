import { Directive, OnInit, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive ({
    selector: '[appMenuItemHighlight]'
})
 export class MenuHighlightDirective implements OnInit {
     @HostBinding('style.backgroundColor') backgroundColor: string;
     constructor (private elRef: ElementRef) {}
     ngOnInit() {}
     @HostListener('mouseover') mouseover() {
         this.backgroundColor = '#7ccbe2';
     }

     @HostListener('mouseleave') mouseleave() {
        this.backgroundColor = 'transparent';
    }
 }
