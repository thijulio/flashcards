import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderModule } from '@flashcards/frontend/shared/header';
import { LeftPanelModule } from '@flashcards/frontend/shared/left-panel';
import { RightPanelModule } from '@flashcards/frontend/shared/right-panel';
import { RootStoreModule } from '@flashcards/frontend/store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        HttpClientModule,
        BrowserAnimationsModule,
        HeaderModule,
        LeftPanelModule,
        RightPanelModule,
        AppRoutingModule,
        MatSidenavModule,
        FlexLayoutModule,
        MatIconModule,
        MatToolbarModule,
        RootStoreModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
