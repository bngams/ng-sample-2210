import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AdminGuard } from './modules/admin/guards/admin.guard';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { StartComponent } from './pages/start/start.component';

// Other preload strategy
// export class PreloadTaggedModuleStrategy implements PreloadingStrategy {
//     preload(route: Route, load: Function): Observable<any> {
//            return route.data && route.data.preload ? load() : of(null);
//     }
// }

// Route[]
// Route[ Route, Route ]
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'start', component: StartComponent}, // TODO: can we make :name param optionnal?
  { path: 'start/:name', component: StartComponent},
  { path: 'home', component: HomeComponent},
  { path: 'admin', canLoad: [AdminGuard], data: { preload: true }, loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule) },
  { path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    {
      preloadingStrategy: PreloadAllModules
      // other specific strategies <T implements PreloadingStrategy>
      // preloadingStrategy: PreloadTaggedModuleStrategy    
    }
  )],
  exports: [RouterModule]
})
export class AppRoutingModule {}
