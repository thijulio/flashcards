import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// tslint:disable: typedef
const appRoutes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: '/' },
    {
        path: 'register',
        loadChildren: () => import('@flashcards/register').then(m => m.RegisterModule),
    },
    {
        path: 'about',
        loadChildren: () => import('@flashcards/about').then(m => m.AboutModule),
    },
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
