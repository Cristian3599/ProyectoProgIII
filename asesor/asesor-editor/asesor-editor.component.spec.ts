import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsesorEditorComponent } from './asesor-editor.component';

describe('AsesorEditorComponent', () => {
  let component: AsesorEditorComponent;
  let fixture: ComponentFixture<AsesorEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsesorEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsesorEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
