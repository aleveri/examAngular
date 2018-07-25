import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarHotelComponent } from './listar-hotel/listar-hotel.component';
import { Routes, RouterModule } from '../../../../node_modules/@angular/router';
import { FormsModule } from '../../../../node_modules/@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';

const routes: Routes = [
  { path: '', component: ListarHotelComponent }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgxSpinnerModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ListarHotelComponent]
})
export class ListarHotelModule { }
