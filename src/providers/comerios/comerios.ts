
import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';

@Injectable()
export class ComeriosProvider {
  rubros:any={};
  constructor(private afDB: AngularFirestore) {

  }

  getRubros(clave:string)
  {
    clave = clave.toLowerCase();
    return new Promise((resolve,reject)=>{
      this.afDB.doc(`/comercios/${clave}`)
          .valueChanges().subscribe(data=>{
            if(data)
            {
              // console.log(data);
              this.rubros=data;

              resolve(this.rubros);
            }
            else
            {
              resolve(false);
            }

          })
    });
  }

}
