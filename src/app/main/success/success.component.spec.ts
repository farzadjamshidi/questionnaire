import { TestBed } from '@angular/core/testing';
import { SuccessComponent } from './success.component';

describe('SuccessComponent', () =>
{
  beforeEach(async () =>
  {
    await TestBed.configureTestingModule({
      imports: [
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
});
