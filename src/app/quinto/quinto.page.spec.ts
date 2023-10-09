import { ComponentFixture, TestBed } from '@angular/core/testing';
import { QuintoPage } from './quinto.page';

describe('QuintoPage', () => {
  let component: QuintoPage;
  let fixture: ComponentFixture<QuintoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(QuintoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
