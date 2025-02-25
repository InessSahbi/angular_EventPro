import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionRechComponent } from './section-rech.component';

describe('SectionRechComponent', () => {
  let component: SectionRechComponent;
  let fixture: ComponentFixture<SectionRechComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SectionRechComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionRechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
