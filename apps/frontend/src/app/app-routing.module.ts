import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: '/' },
    {
        path: 'register',
        loadChildren: () => import('@flashcards/frontend/register').then(m => m.RegisterModule),
    },
    {
        path: 'login',
        loadChildren: () => import('@flashcards/frontend/login').then(m => m.LoginModule),
    },
    {
        path: 'about',
        loadChildren: () => import('@flashcards/frontend/about').then(m => m.AboutModule),
    },
    {
        path: 'account',
        loadChildren: () => import('@flashcards/frontend/my-account').then(m => m.MyAccountModule),
    },
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
