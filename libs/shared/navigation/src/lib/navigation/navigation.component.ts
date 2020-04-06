import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'flashcards-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavigationComponent implements OnInit {
  isExpanded = true;
  isHovering = false;

  isSmall = false;

  constructor(private breakpointObserver: BreakpointObserver) {}

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  ngOnInit(): void {}

  togglePanelSize() {
    this.isExpanded = !this.isExpanded;
    this.isSmall = !this.isExpanded;
  }

  mouseenter() {
    if (this.isExpanded) {
      return;
    }
    this.isSmall = false;
  }

  mouseleave() {
    if (this.isExpanded) {
      return;
    }

    this.isSmall = true;
  }
}
