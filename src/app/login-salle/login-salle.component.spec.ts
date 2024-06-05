import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginSalleComponent } from './login-salle.component';

describe('LoginSalleComponent', () => {
  let component: LoginSalleComponent;
  let fixture: ComponentFixture<LoginSalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginSalleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginSalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
