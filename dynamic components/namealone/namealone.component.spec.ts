import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NamealoneComponent } from './namealone.component';

describe('NamealoneComponent', () => {
  let component: NamealoneComponent;
  let fixture: ComponentFixture<NamealoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NamealoneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NamealoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
