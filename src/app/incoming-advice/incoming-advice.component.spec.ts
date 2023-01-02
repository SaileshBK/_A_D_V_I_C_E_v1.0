import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncomingAdviceComponent } from './incoming-advice.component';

describe('IncomingAdviceComponent', () => {
  let component: IncomingAdviceComponent;
  let fixture: ComponentFixture<IncomingAdviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncomingAdviceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IncomingAdviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
