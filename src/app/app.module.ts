import { BrowserModule } from '@angular/platform-browser';

import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule } from '@ionic/storage';



import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ComeriosProvider } from '../providers/comerios/comerios';
import {RubrosPage} from '../pages/rubros/rubros';
import {ProductosPage} from '../pages/productos/productos';
import {CarritoPage} from '../pages/carrito/carrito';
import { LoginPage } from '../pages/login/login';
//firebase
import {firebaseConfig} from '../config/firebase.config';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
// import { AngularFireDatabaseModule, AngularFireDatabase } from '@angular/fire/database';
// import { AngularFireAuthModule } from '@angular/fire/auth';



import { PedidoProvider } from '../providers/pedido/pedido';
import { UsuarioProvider } from '../providers/usuario/usuario';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    RubrosPage,
    ProductosPage,
    CarritoPage,
    LoginPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule
    // AngularFireDatabaseModule,
    // AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    RubrosPage,
    ProductosPage,
    CarritoPage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ComeriosProvider,
    // AngularFireDatabase,
    PedidoProvider,
    UsuarioProvider
  ]
})
export class AppModule {}
