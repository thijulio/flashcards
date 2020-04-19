import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'playground-playground',
    templateUrl: './playground.component.html',
    styleUrls: ['./playground.component.scss'],
})
export class PlaygroundComponent implements OnInit {
    filteredStatus;
    constructor() {}

    ngOnInit(): void {}

    myList = [
        { value: 'Item 1', status: 'active' },
        { value: 'Item 2', status: 'inactive' },
        { value: 'Item 3', status: 'active' },
        { value: 'Item 4', status: 'inactive' },
        { value: 'Item 5', status: 'active' },
        { value: 'Item 6', status: 'inactive' },
        { value: 'Item 7', status: 'active' },
        { value: 'Item 8', status: 'inactive' },
    ];
    addItem(): void {
        this.myList.push({ value: 'Item 9', status: 'active' });
    }
}
