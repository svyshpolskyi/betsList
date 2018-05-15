import { Directive, OnInit, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
    selector: '[appMenuItemHighlight]'
})
export class MenuHighlightDirective {
    @HostBinding('style.backgroundColor') backgroundColor: string;

    constructor(private elRef: ElementRef) { }

    @HostListener('mouseover') mouseover() {
        this.backgroundColor = '#7ccbe2';
    }

    @HostListener('mouseleave') mouseleave() {
        this.backgroundColor = 'transparent';
    }
}
