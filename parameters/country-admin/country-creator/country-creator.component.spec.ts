import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryCreatorComponent } from './country-creator.component';

describe('CountryCreatorComponent', () => {
  let component: CountryCreatorComponent;
  let fixture: ComponentFixture<CountryCreatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountryCreatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
