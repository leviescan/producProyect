import { Routes } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { CardComponent } from './components/card/card.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './shared/home/home.component';
import { DetailsComponent } from './shared/details/details.component';
import { SignalComponent } from './components/signal/signal.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'signal', component: SignalComponent, title: 'signals' },
    { path: 'products', loadComponent: () => import('./components/products/products.component').then(c => c.ProductsComponent),  title: 'Productos'},
    { path: 'cart', loadComponent: () => import('./components/card/card.component').then(c => c.CardComponent), title: 'Card' },
    { path: 'detail/:id', component: DetailsComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' }, // Redirige a "home" por defecto
    { path: '**', redirectTo: '/home' } // Redirige cualquier ruta no encontrada a "home"
];
