import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './components/contacto/contacto.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { HabitacionesComponent } from './components/habitaciones/habitaciones.component';
import { ReservasComponent } from './components/reservas/reservas.component';
import { RestaurantComponent } from './components/restaurant/restaurant.component';
import { TservicesComponent } from './components/tservices/tservices.component';
import { UbicacionComponent } from './components/ubicacion/ubicacion.component';
import { NavbarComponent } from './navbar/navbar.component';


const routes: Routes = [
  {path: 'hogar', component: NavbarComponent},
  {path: 'tarifaservicios', component: TservicesComponent},
  {path: 'restaurant', component:  RestaurantComponent},
  {path: 'reservas', component: ReservasComponent},
  {path: 'habitaciones', component: HabitacionesComponent},
  {path: 'experienciagastro', component: ExperienciaComponent},
  {path: 'ubicacion', component: UbicacionComponent},
  {path: 'contacto', component: ContactoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
