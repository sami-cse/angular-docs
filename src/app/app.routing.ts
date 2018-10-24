import { ModuleWithProviders } from '@angular/core';


import { Routes, RouterModule } from '@angular/router';
import { HeroComponent } from './hero/hero.component';


const appRoutes: Routes = [
  {
    path: 'hero',
    component: HeroComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);