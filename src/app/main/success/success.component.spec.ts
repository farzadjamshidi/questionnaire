import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateModule } from '@ngx-translate/core';
import { SuccessComponent } from './success.component';

const BASE_MODULES = [
  TranslateModule.forRoot()
];

describe('SuccessComponent', () =>
{
  beforeEach(async () =>
  {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        ...BASE_MODULES
      ],
      declarations: [
        SuccessComponent
      ],
    }).compileComponents();
  });

  it('should create the SuccessComponent', () =>
  {
    const fixture = TestBed.createComponent(SuccessComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it('SuccessComponent should has a mat-card and a div with class m-success-card-content in it', () =>
  {
    const fixture = TestBed.createComponent(SuccessComponent);
    fixture.detectChanges();

    const card = fixture.debugElement.nativeElement.querySelector('mat-card');

    const content = card?.querySelector('div.m-success-card-content');

    expect(content).not.toBeNull();
  });

  it('SuccessComponent should show an SVG like roban', () =>
  {
    const fixture = TestBed.createComponent(SuccessComponent);
    fixture.detectChanges();

    const svg = fixture.debugElement.nativeElement.querySelector('img.a-roban-svg').getAttribute('src');

    expect(svg).toEqual('../../assets/images/svg/roban.svg');
  });

  it('SuccessComponent should show a Thank you message with proper fontSize', () =>
  {
    const fixture = TestBed.createComponent(SuccessComponent);
    fixture.detectChanges();

    const thankYouMessage = fixture.debugElement.nativeElement.querySelector('span.a-text-primary');

    expect(thankYouMessage.textContent).toBe('SUCCESS.THANKYOU');
  });

  it('SuccessComponent should show a description for next step with proper fontSize', () =>
  {
    const fixture = TestBed.createComponent(SuccessComponent);
    fixture.detectChanges();

    const thankYouMessage = fixture.debugElement.nativeElement.querySelector('span.a-text-secondary');

    expect(thankYouMessage.textContent).toBe('SUCCESS.GET_BACK_SOON');
  });

  it('should go to home when click on start another questionary button', () =>
  {

    const fixture = TestBed.createComponent(SuccessComponent);
    fixture.detectChanges();

    const href = fixture.debugElement.nativeElement.querySelector('button').getAttribute('ng-reflect-router-link');

    expect(href).toEqual('/home');
  });
});
