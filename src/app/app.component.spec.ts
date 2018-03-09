import { TestBed, ComponentFixture, async } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { MatchesListComponent } from './matches-list/matches-list.component';
import { BetListComponent } from './bet-list/bet-list.component';

describe('AppComponent', () => {
  let app: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        MatchesListComponent,
        BetListComponent
      ],
    });
  });

  it('Should create the App', async(() => {
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

});
