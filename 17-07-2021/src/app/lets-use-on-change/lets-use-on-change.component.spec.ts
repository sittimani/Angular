import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LetsUseOnChangeComponent } from './lets-use-on-change.component';

describe('LetsUseOnChangeComponent', () => {
  let component: LetsUseOnChangeComponent;
  let fixture: ComponentFixture<LetsUseOnChangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LetsUseOnChangeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LetsUseOnChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
