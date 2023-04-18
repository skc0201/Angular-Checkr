import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdverseActionComponent } from './adverse-action.component';

const routes: Routes = [
    {
        path: '', component: AdverseActionComponent,
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdverseActionRoutingModule { }
