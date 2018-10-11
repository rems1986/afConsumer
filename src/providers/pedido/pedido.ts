
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

import {Platform} from 'ionic-angular';


@Injectable()
export class PedidoProvider {
  cart:any=[];
  constructor(private platform:Platform,private storage: Storage) {
    // console.log('Hello PedidoProvider Provider');
  }

  cargar_storage()
  {


    let promesa = new Promise((resolve,reject)=>{
      if (this.platform.is('cordova')) {
        // console.log("Inicializando storage");
        this.storage.ready().then(()=>{
          // console.log("storage listo");
          this.storage.get("cart").then((val)=>{
              if (val) {
                this.cart=val;
              }
              resolve();

          })
        });
      }
      else{
        if (localStorage.getItem("cart")) {
              this.cart=JSON.parse(localStorage.getItem("cart"));
        }
        resolve();
      }
    })

       return promesa;



  }

  guardar_storage(cart:any)
  {
    let carrito:any=0;
    if(  this.platform.is("cordova")   ){
      // Dispositivo
      this.storage.ready()
            .then( ()=>{

              this.storage.set( "cart", cart );

            })


    }else{
      // Escritorio
      localStorage.setItem("cart", JSON.stringify(cart) );
    }
  }

}
