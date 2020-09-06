import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LayoutFacade } from '../../data/+state/facade/layout.facade';

@Component({
    selector: 'flashcards-right-panel-toolbar',
    templateUrl: './right-panel-toolbar.component.html',
    styleUrls: ['./right-panel-toolbar.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RightPanelToolbarComponent {
    constructor(private readonly layoutFacade: LayoutFacade) {}

    public togglePanelSize(): void {
        this.layoutFacade.toggleRightPanel();
    }
}
