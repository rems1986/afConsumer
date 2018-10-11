import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {itemPedido} from '../../interface/item.interface';
import {PedidoProvider} from '../../providers/pedido/pedido';

@IonicPage()
@Component({
  selector: 'page-carrito',
  templateUrl: 'carrito.html',
})
export class CarritoPage {
  carrito:itemPedido[]=[];
  carritoTmp:itemPedido[]=[];
  subTotal:number=0;

  constructor(public navCtrl: NavController, public navParams: NavParams
  , private _pedidoProv:PedidoProvider) {
    this._pedidoProv.cargar_storage().then(()=>{
      this.carrito = this._pedidoProv.cart;
      this.CalcularSubtotal();
    });
  }

  CalcularSubtotal()
  {
    this.subTotal=0;
    this._pedidoProv.cargar_storage().then(()=>{
      this.carrito = this._pedidoProv.cart;
      for (let i = 0; i <= this.carrito.length-1; i++) {
          this.subTotal+= this.carrito[i].cantidad * this.carrito[i].producto['precio'];
          console.log(this.subTotal);
      }

    });
  }

  disminuir(idx)
  {
    for (let i = 0; i <= this.carrito.length-1; i++) {
        // console.log();
        if (i==idx && this.carrito[i].cantidad>1) {
            this.carrito[i].cantidad-=1;
        }
    }
    this._pedidoProv.guardar_storage(this.carrito);
    this.CalcularSubtotal();
  }
  aumentar(idx)
  {
    for (let i = 0; i <= this.carrito.length-1; i++) {
        if (i==idx) {
            this.carrito[i].cantidad+=1;
        }
    }

    this._pedidoProv.guardar_storage(this.carrito);
    this._pedidoProv.cargar_storage().then(()=>{
      this.carrito = this._pedidoProv.cart;
      this.CalcularSubtotal();
    });
  }

  eliminar(idx)
  {
    let indice=0;
    for (let i = 0; i < this.carrito.length; i++) {
        if (i==idx) {
            this.carrito.splice(i,1)
        }
    }

    this._pedidoProv.guardar_storage(this.carrito);
    this.CalcularSubtotal();
  }
}
