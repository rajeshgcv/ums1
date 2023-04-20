import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistratioFormComponent } from './registratio-form.component';

describe('RegistratioFormComponent', () => {
  let component: RegistratioFormComponent;
  let fixture: ComponentFixture<RegistratioFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistratioFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistratioFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
