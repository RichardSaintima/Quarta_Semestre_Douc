import { ComponentFixture, TestBed } from '@angular/core/testing';
import { QuintaListadoPage } from './quinta-listado.page';

describe('QuintaListadoPage', () => {
  let component: QuintaListadoPage;
  let fixture: ComponentFixture<QuintaListadoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(QuintaListadoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
