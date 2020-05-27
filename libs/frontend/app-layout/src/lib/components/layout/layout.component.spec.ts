import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MockModule } from 'ng-mocks';
import { MaterialModule } from '../../material.module';
import { LayoutFacade } from '../../state/facade/layout.facade';
import { LayoutFacadeStub } from '../../state/facade/layout.facade.stub';
import { HeaderModule } from '../header-toolbar/header.module';
import { LeftPanelModule } from '../left-panel-toolbar/left-panel.module';
import { RightPanelModule } from '../right-panel-toolbar/right-panel.module';
import { LayoutComponent } from './layout.component';

describe('LayoutComponent', () => {
    let component: LayoutComponent;
    let fixture: ComponentFixture<LayoutComponent>;
    let layoutFacade: LayoutFacade;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [LayoutComponent],
            imports: [
                RouterTestingModule,
                MockModule(MaterialModule),
                MockModule(HeaderModule),
                MockModule(LeftPanelModule),
                MockModule(RightPanelModule),
            ],
            providers: [{ provide: LayoutFacade, useClass: LayoutFacadeStub }],
        }).compileComponents();

        fixture = TestBed.createComponent(LayoutComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();

        layoutFacade = TestBed.inject(LayoutFacade);
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should call mouseEnterLeftPanel method', () => {
        layoutFacade.mouseEnterLeftPanel = jest.fn();
        component.onMouseEnterLeftPanel();

        expect(layoutFacade.mouseEnterLeftPanel).toHaveBeenCalled();
    });

    it('should call mouseLeaveLeftPanel method', () => {
        layoutFacade.mouseLeaveLeftPanel = jest.fn();
        component.onMouseLeaveLeftPanel();

        expect(layoutFacade.mouseLeaveLeftPanel).toHaveBeenCalled();
    });
});
