import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPageComponent } from '@flashcards/about';

const appRoutes: Routes = [
    { path: 'about', component: AboutPageComponent },
    { path: '**', redirectTo: '/' },
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
