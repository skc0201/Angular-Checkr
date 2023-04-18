import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CandidateListComponent } from './candidate-list/candidate-list.component';
import { CandidateDetailComponent } from './candidate-detail/candidate-detail.component';

const routes: Routes = [
    {
        path: '', component: CandidateListComponent,
    },
    {path:'candidatedetail/:id' , component:CandidateDetailComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
