import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class LocalStorageService {
    public setSavedState(state: any, localStorageKey: string): void {
        localStorage.setItem(localStorageKey, JSON.stringify(state));
    }

    public getSavedState(localStorageKey: string): any {
        return JSON.parse(localStorage.getItem(localStorageKey));
    }
}
