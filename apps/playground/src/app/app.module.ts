import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AddressComponent } from './components/address/address.component';
import { AddressModule } from './components/address/adress.module';
import { NavigationModule } from './components/navigation/navigation.module';
import { PlaygroundComponent } from './components/playground/playground.component';
import { PlaygroundModule } from './components/playground/playground.module';

const appRoutes: Routes = [
    { path: 'address', component: AddressComponent },
    { path: 'playground', component: PlaygroundComponent },
    { path: '**', redirectTo: '/' },
];
@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        RouterModule.forRoot(appRoutes),
        AddressModule,
        MatFormFieldModule,
        BrowserAnimationsModule,
        NavigationModule,
        PlaygroundModule,
        FlexLayoutModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
