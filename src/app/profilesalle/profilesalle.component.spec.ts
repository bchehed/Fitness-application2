import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilesalleComponent } from './profilesalle.component';

describe('ProfilesalleComponent', () => {
  let component: ProfilesalleComponent;
  let fixture: ComponentFixture<ProfilesalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilesalleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfilesalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
