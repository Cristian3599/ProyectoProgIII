import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientCreatorComponent } from './client-creator.component';

describe('ClientCreatorComponent', () => {
  let component: ClientCreatorComponent;
  let fixture: ComponentFixture<ClientCreatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientCreatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
