import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutModule } from '@flashcards/about';
import { RegisterModule } from '@flashcards/register';
import { SharedHeaderModule } from '@flashcards/shared/header';
import { SharedLeftPanelModule } from '@flashcards/shared/left-panel';
import { SharedRightPanelModule } from '@flashcards/shared/right-panel';
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
        RegisterModule,
        AboutModule,
        AppRoutingModule,
        MatSidenavModule,
        FlexLayoutModule,
        MatIconModule,
        MatToolbarModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
