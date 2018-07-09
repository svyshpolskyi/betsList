import { Component, Input, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

@Component({
    selector: 'app-single-match',
    templateUrl: './single-match.component.html',
    styleUrls: ['./single-match.component.scss']
})

export class SinlgeMatchComponent {
    @Input() singleMatch;

    select(value) {
        console.log(value);
    }



}
