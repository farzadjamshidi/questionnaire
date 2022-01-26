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
});
