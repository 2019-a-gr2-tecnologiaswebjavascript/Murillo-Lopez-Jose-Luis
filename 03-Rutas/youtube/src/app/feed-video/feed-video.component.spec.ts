import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedVideoComponent } from './feed-video.component';

describe('FeedVideoComponent', () => {
  let component: FeedVideoComponent;
  let fixture: ComponentFixture<FeedVideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedVideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
