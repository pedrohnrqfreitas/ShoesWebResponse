import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'telinha5';

  numTenis:number=0
  abreEfecha:boolean=false



  actualImage: string = 'assets/image-product-1.jpg'

  public contadorMais(){
    this.numTenis = this.numTenis + 1;
  }
  public contadorMenos(){
    this.numTenis = this.numTenis - 1;
  }
  public verifica(){
    if(this.numTenis < 0 ){
      return this.numTenis=0
    }else{
      return this.numTenis
    }
}
}
