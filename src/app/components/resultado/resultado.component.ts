import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css']
})
export class ResultadoComponent implements OnInit {

  bmi: number;
  resultado: string;
  interpretacion: string;

  constructor(private route: ActivatedRoute) {
    this.resultado = '',
    this.interpretacion = '';
    this.bmi = +route.snapshot.paramMap.get('valor')!;
   }

  ngOnInit(): void {
    this.getResultado();
  }

  getResultado() {

    if(this.bmi >= 25){
      this.resultado = 'Exceso de Peso';
      this.interpretacion = 'Tienes un peso corporal mayor al normal, intente comer mas saludable y hacer ejercicio, gordo hpta!';
    }else if(this.bmi >= 18.5){
      this.resultado = 'Peso Normal';
      this.interpretacion = 'Tienes un peso corporal normal';
    }else{
      this.resultado = 'Peso bajo';
      this.interpretacion = 'Tienes un peso corporal bajo, intente ganar un poco de mase';
    }

  }

}
