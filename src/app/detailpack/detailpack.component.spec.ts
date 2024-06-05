import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailpackComponent } from './detailpack.component';

describe('DetailpackComponent', () => {
  let component: DetailpackComponent;
  let fixture: ComponentFixture<DetailpackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailpackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailpackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
