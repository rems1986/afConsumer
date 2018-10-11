import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ProductosPage} from '../productos/productos';

//firebase
import { AngularFirestore } from 'angularfire2/firestore';


import {ComeriosProvider} from '../../providers/comerios/comerios';


@IonicPage()
@Component({
  selector: 'page-rubros',
  templateUrl: 'rubros.html',
})
export class RubrosPage {
  rubros:any={};
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public _comercioProv:ComeriosProvider, private afDB: AngularFirestore) {
    // console.log(this.navParams.get('comercio'));
    this.getRubros(this.navParams.get('comercio'));
  }

  getRubros(clave:string)
  {

    this._comercioProv.getRubros(clave)
        .then(existe=>{
          this.rubros=existe;
          // this.comercios = this.comercios2[0];
          // this.rubros.foreac
          // console.log(this.rubros.rubros);
          if(existe)
          {

          }
          else{

          }
        })
  }

  goProductos(comercio:any,rubro:string)
  {
    // console.log(rubro);
    this.navCtrl.push(ProductosPage,{'comercio':comercio,'rubroSeleccionado':rubro});
  }


}
