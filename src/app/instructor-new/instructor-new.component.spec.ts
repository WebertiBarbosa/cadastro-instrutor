import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructorNewComponent } from './instructor-new.component';

describe('InstructorNewComponent', () => {
  let component: InstructorNewComponent;
  let fixture: ComponentFixture<InstructorNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstructorNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstructorNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
