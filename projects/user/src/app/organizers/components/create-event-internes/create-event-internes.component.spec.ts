import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEventInternesComponent } from './create-event-internes.component';

describe('CreateEventInternesComponent', () => {
  let component: CreateEventInternesComponent;
  let fixture: ComponentFixture<CreateEventInternesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateEventInternesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateEventInternesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
