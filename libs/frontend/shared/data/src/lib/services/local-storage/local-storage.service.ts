import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class LocalStorageService {
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    public setSavedState(state: unknown, localStorageKey: string): void {
        localStorage.setItem(localStorageKey, JSON.stringify(state));
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    public getSavedState(localStorageKey: string): any {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return
        return JSON.parse(localStorage.getItem(localStorageKey));
    }
}
