import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AddressComponent } from './components/address/address.component';
import { AddressModule } from './components/address/adress.module';

const appRoutes: Routes = [
    { path: 'address', component: AddressComponent },
    { path: '**', redirectTo: '/' },
];
@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, RouterModule.forRoot(appRoutes), AddressModule, MatFormFieldModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
