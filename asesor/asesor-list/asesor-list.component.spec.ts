import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsesorListComponent } from './asesor-list.component';

describe('AsesorListComponent', () => {
  let component: AsesorListComponent;
  let fixture: ComponentFixture<AsesorListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsesorListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsesorListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
