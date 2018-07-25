import { Component, OnInit } from '@angular/core';
import { HotelService } from '../../../Servicios/hotel.service';
import { Hotel } from '../../../Modelos/Hotel';
import { NgxSpinnerService } from '../../../../../node_modules/ngx-spinner';

@Component({
  selector: 'app-listar-hotel',
  templateUrl: './listar-hotel.component.html',
  styleUrls: ['./listar-hotel.component.css']
})
export class ListarHotelComponent implements OnInit {

  minStars: number;
  maxStars: number;
  nombre: string;
  hoteles: Hotel[];

  constructor(private hotelService: HotelService,
    private spinner: NgxSpinnerService) {
    this.minStars = 0;
    this.maxStars = 0;
  }

  ngOnInit() {
    this.spinner.show();
    this.hotelService.listar(['1', '10']).subscribe((data: any) => {
      this.hoteles = data;
      this.spinner.hide();
    }, error => {
      console.log(error)
      this.spinner.hide();
    });
  }

  estrellas(min: number, max: number, all: boolean) {
    if (this.minStars == 0 && this.maxStars == 0) {
      this.minStars = min;
      this.maxStars = max;
      return;
    }
    if (all) {
      this.minStars = 0;
    }
    if (!all) {
      this.minStars = min;
    }
    this.maxStars = max;
  }

  filtrar() {
    this.spinner.show();
    this.hotelService.filtrar([this.minStars.toString(), this.maxStars.toString(), this.nombre]).subscribe((data: any) => {
      this.hoteles = data;
      this.spinner.hide();
    }, error => {
      console.log(error)
      this.spinner.hide();
    });
  }

}
