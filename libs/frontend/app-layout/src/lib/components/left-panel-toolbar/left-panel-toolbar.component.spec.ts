import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MockModule } from 'ng-mocks';
import { LayoutFacade } from '../../+state/facade/layout.facade';
import { LayoutFacadeStub } from '../../+state/facade/layout.facade.stub';
import { MaterialModule } from '../../material.module';
import { LeftPanelToolbarComponent } from './left-panel-toolbar.component';

describe('LeftPanelToolbarComponent', () => {
    let component: LeftPanelToolbarComponent;
    let fixture: ComponentFixture<LeftPanelToolbarComponent>;
    let layoutFacade: LayoutFacade;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [LeftPanelToolbarComponent],
            imports: [MockModule(MaterialModule)],
            providers: [{ provide: LayoutFacade, useClass: LayoutFacadeStub }],
        });

        fixture = TestBed.createComponent(LeftPanelToolbarComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();

        layoutFacade = TestBed.inject(LayoutFacade);
    }));

    test('should create', () => {
        expect(component).toBeTruthy();
    });

    test('should toggle panel', () => {
        layoutFacade.toggleLeftPanel = jest.fn();
        component.togglePanelSize();

        expect(layoutFacade.toggleLeftPanel).toHaveBeenCalled();
    });
});
