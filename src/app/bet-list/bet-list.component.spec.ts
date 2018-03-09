import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BetListComponent } from './bet-list.component';

describe('MatchesListComponent', () => {
  let component: BetListComponent;
  let fixture: ComponentFixture<BetListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BetListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BetListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should create MatchesList Component', () => {
    expect(component).toBeTruthy();
  });
});
