import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEventExternesComponent } from './create-event-externes.component';

describe('CreateEventExternesComponent', () => {
  let component: CreateEventExternesComponent;
  let fixture: ComponentFixture<CreateEventExternesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateEventExternesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateEventExternesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
