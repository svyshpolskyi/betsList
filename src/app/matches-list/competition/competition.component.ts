import { Component, Input, OnInit } from '@angular/core';
@Component ({
    selector: 'app-competition',
    templateUrl: './competition.component.html',
    styleUrls: ['./competition.component.css']
})
export class CompetitionComponent implements OnInit {
    @Input() matches;
    @Input() competition;
    ngOnInit() {
        console.log(this.competition);
    }
}
