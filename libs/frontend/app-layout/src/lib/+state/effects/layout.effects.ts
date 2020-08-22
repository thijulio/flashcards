import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Injectable } from '@angular/core';
import { Actions, createEffect } from '@ngrx/effects';
import { TypedAction } from '@ngrx/store/src/models';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { LayoutActions } from '../actions/layout.actions';

@Injectable()
export class LayoutEffects {
    public breakpoint$: Observable<
        TypedAction<'[Layout] Change to Mobile'> | TypedAction<'[Layout] Change to Web'>
    > = createEffect(() =>
        this.breakpointObserver
            .observe(['(min-width: 900px)'])
            .pipe(
                map((result: BreakpointState) =>
                    result.matches ? LayoutActions.changeToWeb() : LayoutActions.changeToMobile()
                )
            )
    );

    constructor(private readonly actions$: Actions, private readonly breakpointObserver: BreakpointObserver) {}
}
