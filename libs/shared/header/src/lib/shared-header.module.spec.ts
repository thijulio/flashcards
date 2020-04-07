import { async, TestBed } from '@angular/core/testing';
import { SharedHeaderModule } from './shared-header.module';

describe('SharedHeaderModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedHeaderModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(SharedHeaderModule).toBeDefined();
  });
});
