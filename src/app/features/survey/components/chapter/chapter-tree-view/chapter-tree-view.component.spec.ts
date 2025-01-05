import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChapterTreeViewComponent } from './chapter-tree-view.component';

describe('SurveyTreeViewComponent', () => {
  let component: ChapterTreeViewComponent;
  let fixture: ComponentFixture<ChapterTreeViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChapterTreeViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChapterTreeViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
