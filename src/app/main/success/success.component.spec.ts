import { TestBed } from '@angular/core/testing';
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
});
