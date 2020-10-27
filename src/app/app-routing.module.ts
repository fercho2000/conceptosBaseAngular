import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticuloDetalleComponent } from './articulo-detalle/articulo-detalle.component';
import { ArticuloComponent } from './articulo/articulo.component';
import { DirectivaComponent } from './directiva/directiva.component';
import { EjemploComponent } from './ejemplo/ejemplo.component';
import { Pagina404Component } from './pagina404/pagina404.component';
import { PipesComponent } from './pipes/pipes.component';
import { TitulosComponent } from './titulos/titulos.component';
import { AgregarusuarioComponent } from './usuarios/agregarusuario/agregarusuario.component';
import { EditarusuarioComponent } from './usuarios/editarusuario/editarusuario.component';
import { UsuariosComponent } from './usuarios/usuarios.component';

const routes: Routes = [
  {
    path: '', component: TitulosComponent
  },
  {
    path: 'pipes', component: PipesComponent
  },
  {
    path: 'ejemplo', component: EjemploComponent
  },
  {
    path: 'directivas', component: DirectivaComponent
  },
  {
    path: 'usuarios', component: UsuariosComponent, children: [
      {
        path: 'agregar', component: AgregarusuarioComponent
      }, {
        path: 'editar', component: EditarusuarioComponent
      }
    ]
  },
  {
    path: 'articulo', component: ArticuloComponent
  },
  {
    path: 'articuloDetalle', component: ArticuloDetalleComponent
  },
  {
    path: '**', component: Pagina404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
