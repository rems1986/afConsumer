import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

// import {UsuarioProvider} from '../../providers/usuario/usuario';
import {HomePage} from '../home/home';

//firebase
// import { AngularFireAuth } from '@angular/fire/auth';
// import * as firebase from 'firebase/app';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController
    // , private afAuth: AngularFireAuth
  ) {
  }

  ir()
  {
    this.navCtrl.setRoot(HomePage);
  }
  signInWithFacebook() {

    // this.afAuth.auth
    //   .signInWithPopup(new firebase.auth.FacebookAuthProvider())
    //   .then(res =>
    //     {
    //       let user = res.user;
    //
    //       this.usuarioProv.cargarUsuario(user.displayName,user.email,user.photoUrl,user.uid,'facebook');
    //       console.log(user);
    //
    //     }
    //   );
  }

}
