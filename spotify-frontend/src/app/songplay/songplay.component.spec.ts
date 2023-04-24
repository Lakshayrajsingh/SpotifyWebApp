import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SongplayComponent } from './songplay.component';

describe('SongplayComponent', () => {
  let component: SongplayComponent;
  let fixture: ComponentFixture<SongplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SongplayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SongplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
