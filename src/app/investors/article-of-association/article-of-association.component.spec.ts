import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleOfAssociationComponent } from './article-of-association.component';

describe('ArticleOfAssociationComponent', () => {
  let component: ArticleOfAssociationComponent;
  let fixture: ComponentFixture<ArticleOfAssociationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArticleOfAssociationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArticleOfAssociationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
