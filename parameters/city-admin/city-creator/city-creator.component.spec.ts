import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CityCreatorComponent } from './city-creator.component';

describe('CityCreatorComponent', () => {
  let component: CityCreatorComponent;
  let fixture: ComponentFixture<CityCreatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CityCreatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CityCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
