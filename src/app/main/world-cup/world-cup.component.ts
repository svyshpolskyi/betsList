import { Component, OnInit } from '@angular/core';
import { WorldCupService } from '../../shared/world-cup.service';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-world-cup',
  templateUrl: './world-cup.component.html',
  styleUrls: ['./world-cup.component.scss']
})
export class WorldCupComponent {
    data: any = [];
    checked = false;
    constructor (private worldCupService: WorldCupService) {
        this.worldCupService.getData().subscribe(dat => {
          this.data = dat.fixtures.filter(match => match.status === 'TIMED');
          console.log(this.data);
        });
    }

    isChecked() {
        this.checked = !this.checked;
        console.log(this.checked);
    }

}
