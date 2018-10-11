import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {ComeriosProvider} from '../../providers/comerios/comerios';
import {Comercio} from '../../interface/comercio.interface';
import { Observable } from 'rxjs';
import { AngularFirestore } from 'angularfire2/firestore';
import {RubrosPage} from '../rubros/rubros';
import {LoginPage} from '../login/login';

import {UsuarioProvider} from '../../providers/usuario/usuario';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  comercios2:any={};
  //comercios:any[]=[];
  comercios: Observable<any[]>;


  constructor(public navCtrl: NavController, public _comercioProv:ComeriosProvider
              , private afDB: AngularFirestore
              , public usuarioProv:UsuarioProvider
              , public navParams:NavParams
      ) {
    //nDk6L0rERsDHXoHPM6uw

    this.comercios = afDB.collection('comercios').valueChanges();
    // console.log(this.usuarioProv.usuario);
  }


  goRubros(comercio:string)
  {
    // console.log(comercio);
    this.navCtrl.push(RubrosPage,{'comercio':comercio});
  }

}
