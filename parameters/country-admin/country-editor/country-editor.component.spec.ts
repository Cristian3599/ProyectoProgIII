import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryEditorComponent } from './country-editor.component';

describe('CountryEditorComponent', () => {
  let component: CountryEditorComponent;
  let fixture: ComponentFixture<CountryEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountryEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
