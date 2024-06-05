import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierprofilclientComponent } from './modifierprofilclient.component';

describe('ModifierprofilclientComponent', () => {
  let component: ModifierprofilclientComponent;
  let fixture: ComponentFixture<ModifierprofilclientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierprofilclientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifierprofilclientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
