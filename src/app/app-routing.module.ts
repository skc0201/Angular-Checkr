import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NotFoundComponent} from './atoms/not-found/not-found.component'
const routes: Routes = [
  {path:'' , redirectTo:'/candidatelist' ,  pathMatch:'full'},
  {
    path: 'candidatelist',
    loadChildren: () => import('../app/pages/home/home.module').then(mod => mod.HomeModule)
},
{
  path: 'adverse',
  loadChildren: () => import('../app/pages/adverse-action/adverse-action.module').then(mod => mod.AdverseActionModule)
},
  {path:'**' , component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
