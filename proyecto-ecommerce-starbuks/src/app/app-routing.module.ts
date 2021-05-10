import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { HomeComponent } from './pages/Home/home/home.component'
import { TiendaComponent } from './Pages/Tienda/tienda/tienda.component'

const routes: Routes = [
  {
    path: 'Home',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'Tienda',
    component: TiendaComponent,
    pathMatch: 'full',
  },
  // {
  //   path: 'novedades',
  //   component:,
  //   pathMatch: 'full'
  // },
  // {
  //   path: 'contact',
  //   component:,
  //   pathMatch: 'full'
  // },
  {
    path: '**',
    redirectTo: '',
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
