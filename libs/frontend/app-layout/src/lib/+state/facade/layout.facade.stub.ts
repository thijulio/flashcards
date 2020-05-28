import { Observable, of } from 'rxjs';

export class LayoutFacadeStub {
    public isLeftPanelReduced$: Observable<boolean> = of(true);
    public isRightPanelReduced$: Observable<boolean> = of(true);

    public isHandset$: Observable<boolean> = of(false);

    public toggleLeftPanel(): void {
        return;
    }

    public mouseEnterLeftPanel(): void {
        return;
    }

    public mouseLeaveLeftPanel(): void {
        return;
    }

    public toggleRightPanel(): void {
        return;
    }
}
