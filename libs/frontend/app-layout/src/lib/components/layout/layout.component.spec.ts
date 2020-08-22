import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MockModule } from 'ng-mocks';
import { LayoutFacade } from '../../+state/facade/layout.facade';
import { MaterialModule } from '../../material.module';
import { HeaderModule } from '../header-toolbar/header.module';
import { LeftPanelModule } from '../left-panel-toolbar/left-panel.module';
import { RightPanelModule } from '../right-panel-toolbar/right-panel.module';
import { LayoutComponent } from './layout.component';

describe('LayoutComponent', () => {
    let component: LayoutComponent;
    let fixture: ComponentFixture<LayoutComponent>;
    let layoutFacade: LayoutFacade;

    beforeEach(async(() => {
        void TestBed.configureTestingModule({
            declarations: [LayoutComponent],
            imports: [
                RouterTestingModule,
                MockModule(MaterialModule),
                MockModule(HeaderModule),
                MockModule(LeftPanelModule),
                MockModule(RightPanelModule),
            ],
            providers: [
                {
                    provide: LayoutFacade,
                    useValue: {
                        mouseEnterLeftPanel: jest.fn(),
                        mouseLeaveLeftPanel: jest.fn(),
                        toggleLeftPanel: jest.fn(),
                    },
                },
            ],
        }).compileComponents();

        fixture = TestBed.createComponent(LayoutComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();

        layoutFacade = TestBed.inject(LayoutFacade);
    }));

    test('should create', () => {
        expect(component).toBeTruthy();
    });

    test('should call mouseEnterLeftPanel method', () => {
        component.onMouseEnterLeftPanel();

        expect(layoutFacade.mouseEnterLeftPanel).toHaveBeenCalled();
    });

    test('should call mouseLeaveLeftPanel method', () => {
        component.onMouseLeaveLeftPanel();

        expect(layoutFacade.mouseLeaveLeftPanel).toHaveBeenCalled();
    });

    test('should close when backdrop is clicked', () => {
        component.backDropClicked();

        expect(layoutFacade.toggleLeftPanel).toHaveBeenCalled();
    });
});
