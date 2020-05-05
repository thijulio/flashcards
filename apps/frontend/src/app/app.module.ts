import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedHeaderModule } from '@flashcards/shared/header';
import { SharedLeftPanelModule } from '@flashcards/shared/left-panel';
import { SharedRightPanelModule } from '@flashcards/shared/right-panel';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        HttpClientModule,
        BrowserAnimationsModule,
        SharedHeaderModule,
        SharedLeftPanelModule,
        SharedRightPanelModule,
        AppRoutingModule,
        MatSidenavModule,
        FlexLayoutModule,
        MatIconModule,
        MatToolbarModule,
        StoreModule.forRoot({}, {}),
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
