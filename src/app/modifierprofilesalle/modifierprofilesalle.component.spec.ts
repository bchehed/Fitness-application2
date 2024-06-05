import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierprofilesalleComponent } from './modifierprofilesalle.component';

describe('ModifierprofilesalleComponent', () => {
  let component: ModifierprofilesalleComponent;
  let fixture: ComponentFixture<ModifierprofilesalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierprofilesalleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifierprofilesalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
