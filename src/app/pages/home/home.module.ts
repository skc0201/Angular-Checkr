import { NgModule } from '@angular/core';
import { HomeRoutingModule } from './home-routing.module';
import { ChipComponent } from 'src/app/atoms/chip/chip.component';
import { CardComponent } from 'src/app/molecules/card/card.component';
import { HeaderComponent } from 'src/app/molecules/header/header.component';
import { CandidateInformationComponent } from 'src/app/organisms/candidate-information/candidate-information.component';
import { CourtSearchesComponent } from 'src/app/organisms/court-searches/court-searches.component';
import { ReportInformationComponent } from 'src/app/organisms/report-information/report-information.component';
import { CandidateDetailComponent } from './candidate-detail/candidate-detail.component';
import { CandidateListComponent } from './candidate-list/candidate-list.component';
import { LayoutModule } from '@angular/cdk/layout';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  imports: [
    RouterModule,
    HttpClientModule,
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatChipsModule,
    MatExpansionModule,
    MatCheckboxModule,
    MatDialogModule,
    MatMenuModule,
    SharedModule
  ],
  declarations: [
    CandidateListComponent,
    CandidateDetailComponent,
    HeaderComponent,
    ChipComponent,
    CandidateInformationComponent,
    ReportInformationComponent,
    CardComponent,
    CourtSearchesComponent,
  ],
  providers: [],
})
export class HomeModule { }
