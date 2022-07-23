
import { Component } from "@angular/core";
import { RouterModule, Routes} from "@angular/router";
import { NavbarComponent } from "../navbar/navbar.component";
import { ContactoComponent } from "./contacto/contacto.component";
import { ExperienciaComponent } from "./experiencia/experiencia.component";
import { HabitacionesComponent } from "./habitaciones/habitaciones.component";
import { ReservasComponent } from "./reservas/reservas.component";
import { RestaurantComponent } from "./restaurant/restaurant.component";
import {TservicesComponent} from "./tservices/tservices.component";
import { UbicacionComponent } from "./ubicacion/ubicacion.component";

const app_routes:Routes=[
  {path:'hogar', component:NavbarComponent},
  {path:'tarifaservicios', component:TservicesComponent},
  {path:'restaurant', component:RestaurantComponent},
  {path:'reservas', component:ReservasComponent},
  {path:'habitaciones', component:HabitacionesComponent},
  {path:'experienciagastro', component:ExperienciaComponent},
  {path:'ubicacion', component:UbicacionComponent},
  {path:'contacto', component:ContactoComponent},
  {path:'**', pathMatch:'full' , redirectTo: 'inicio'}
];

export const app_routing=RouterModule.forRoot(app_routes)
/**/
