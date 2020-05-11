import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { LayoutFacade } from '../../state/facade/layout.facade';
@Component({
    selector: 'flashcards-left-panel-toolbar',
    templateUrl: './left-panel-toolbar.component.html',
    styleUrls: ['./left-panel-toolbar.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LeftPanelToolbarComponent {
    public isLeftPanelExpanded$: Observable<boolean> = this.layoutFacade.isLeftPanelExpanded$;

    constructor(private readonly layoutFacade: LayoutFacade) {}

    public togglePanelSize(): void {
        this.layoutFacade.toggleLeftPanel();
    }
}
