import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from '@flashcards/api-interfaces';
import { Observable } from 'rxjs';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'flashcards-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {}
