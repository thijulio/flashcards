import { async, TestBed } from '@angular/core/testing';
import { SharedLeftPanelModule } from './shared-left-panel.module';

describe('SharedLeftPanelModule', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [SharedLeftPanelModule],
        }).compileComponents();
    }));

    it('should create', () => {
        expect(SharedLeftPanelModule).toBeDefined();
    });
});
