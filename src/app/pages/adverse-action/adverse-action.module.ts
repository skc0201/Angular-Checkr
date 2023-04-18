import { NgModule } from '@angular/core';
import { LayoutModule } from '@angular/cdk/layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DialogBoxComponent } from 'src/app/organisms/dialog-box/dialog-box.component';
import { AdverseActionComponent } from './adverse-action.component';
import { AdverseActionRoutingModule } from './adverse-action-routing.module';
import {MatDividerModule} from '@angular/material/divider';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    AdverseActionRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatCheckboxModule,
    MatDialogModule,
    MatMenuModule,
    MatDividerModule,
    SharedModule
  ],
  declarations: [
    AdverseActionComponent,
    DialogBoxComponent,

  ],
  providers: []
})
export class AdverseActionModule { }
