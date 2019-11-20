import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpinnerComponent } from './spinner.component';
import { TranslatePipeModule } from '../pipes/translate.pipe.module';
import { TranslateService } from 'src/app/images/services/translate.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('SpinnerComponent', () => {
  let component: SpinnerComponent;
  let fixture: ComponentFixture<SpinnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SpinnerComponent],
      imports: [TranslatePipeModule, HttpClientTestingModule],

    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create spinner', () => {
    expect(component).toBeTruthy();
  });
});
