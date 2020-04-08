import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { AboutModule, AboutPageComponent } from '@flashcards/about';
import { SharedHeaderModule } from '@flashcards/shared/header';
import { SharedLeftPanelModule } from '@flashcards/shared/left-panel';
import { AppComponent } from './app.component';

const appRoutes: Routes = [
    { path: 'about', component: AboutPageComponent },
    { path: '**', redirectTo: '' }, // create a component page not found
];

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        HttpClientModule,
        BrowserAnimationsModule,
        RouterModule.forRoot(appRoutes),
        SharedHeaderModule,
        SharedLeftPanelModule,
        MatSidenavModule,
        FlexLayoutModule,
        AboutModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
