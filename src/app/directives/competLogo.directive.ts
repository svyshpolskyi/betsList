import { Directive, OnInit, ElementRef, Renderer2 } from '@angular/core';
@Directive({
    selector: '[appCompetLogo]'
})

export class CompetitionLogoDirective implements OnInit {
    constructor(private elRef: ElementRef, private renderer: Renderer2) {}
    ngOnInit() {
        console.log(this.elRef.nativeElement.innerText);
    }
}
