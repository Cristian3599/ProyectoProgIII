import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsesorCreatorComponent } from './asesor-creator.component';

describe('AsesorCreatorComponent', () => {
  let component: AsesorCreatorComponent;
  let fixture: ComponentFixture<AsesorCreatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsesorCreatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsesorCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
