import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutModule } from '@flashcards/about';
import { SharedHeaderModule } from '@flashcards/shared/header';
import { SharedLeftPanelModule } from '@flashcards/shared/left-panel';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
    declarations: [AppComponent],
    imports: [
        // CommonModule,
        BrowserModule,
        HttpClientModule,
        BrowserAnimationsModule,
        SharedHeaderModule,
        SharedLeftPanelModule,
        MatSidenavModule,
        FlexLayoutModule,
        AboutModule,
        AppRoutingModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
