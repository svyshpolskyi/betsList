import { Directive, ElementRef } from '@angular/core';

@Directive ({
    selector: '[appToggleBlock]'
})

export class ToggleBlockDirective {
    constructor (private elRef: ElementRef) {}
}
