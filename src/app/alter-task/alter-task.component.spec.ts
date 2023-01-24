import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlterTaskComponent } from './alter-task.component';

describe('AlterTaskComponent', () => {
  let component: AlterTaskComponent;
  let fixture: ComponentFixture<AlterTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlterTaskComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlterTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
