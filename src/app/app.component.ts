import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api'

@Component({
  standalone: false,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit {
  title = 'stock-Control';

  constructor(private primeNgConfig: PrimeNGConfig){

  }
  ngOnInit(): void {
    this.primeNgConfig.ripple = true
  }
}
