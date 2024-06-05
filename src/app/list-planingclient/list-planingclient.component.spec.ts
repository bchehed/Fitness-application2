import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPlaningclientComponent } from './list-planingclient.component';

describe('ListPlaningclientComponent', () => {
  let component: ListPlaningclientComponent;
  let fixture: ComponentFixture<ListPlaningclientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPlaningclientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListPlaningclientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
