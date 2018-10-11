import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {productoSeleccionado} from '../../interface/producto.interface';

import {PedidoProvider} from '../../providers/pedido/pedido';
import { IonicStorageModule } from '@ionic/storage';

import {CarritoPage} from '../carrito/carrito';
import {itemPedido} from '../../interface/item.interface';

@IonicPage()
@Component({
  selector: 'page-productos',
  templateUrl: 'productos.html',
})
export class ProductosPage {
  comercios:any={};
  rubroSeleccionado:string;
  productosComercio:any[]=[];
  // items:{cartItems:string,prod:string,precio:number};
  // cart:any=[];
  // cartItems:any=[];
  // cantItems:any=[];
  carrito:itemPedido[]=[];
   item = <itemPedido>{
     comercio:"",
     index:0,
     producto:[],
     cantidad:0
  }



  constructor(public navCtrl: NavController, public navParams: NavParams
    , private _pedidoProv:PedidoProvider

  ) {
    this.comercios = this.navParams.get('comercio');
    this.rubroSeleccionado = this.navParams.get('rubroSeleccionado');
    this.productosComercio = this.comercios.productos[this.rubroSeleccionado];

    this._pedidoProv.cargar_storage().then(()=>{
    this.carrito = this._pedidoProv.cart;

    });
  }

  ngOnInit() {
        this._pedidoProv.cargar_storage().then(()=>{
        this.carrito = this._pedidoProv.cart;
      });

     }
  ionViewDidEnter() {

    this._pedidoProv.cargar_storage().then(()=>{
      this.carrito = this._pedidoProv.cart;
    });
  }

  addCart(idx:number)
  {
    let encontrado=false;
    for (let i = 0; i <= this.carrito.length-1; i++) {
        if(this.carrito[i].index==idx)
        {
          encontrado=true
        }
    }
    if (encontrado==false) {
          this.item.index=idx;
          this.item.comercio=this.comercios;
          this.item.producto=this.productosComercio[idx];
          this.item.cantidad=1;


          this.carrito.push(this.item);
          this._pedidoProv.guardar_storage(this.carrito);
    }
    encontrado=false;
  }

  verCarrito()
  {
    this.navCtrl.push(CarritoPage,{"cart":this.carrito});
  }

}
