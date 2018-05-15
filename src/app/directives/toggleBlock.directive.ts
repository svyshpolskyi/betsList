import { Directive, ElementRef, HostListener, HostBinding } from '@angular/core';

@Directive({
    selector: '[appToggleBlock]'
})

export class ToggleBlockDirective {
    @HostBinding('class.opened') isOpened = true;

    @HostListener('click') toggleOpen() {
        this.isOpened = !this.isOpened;
    }
}
