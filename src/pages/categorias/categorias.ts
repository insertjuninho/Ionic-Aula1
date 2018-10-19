import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Categoria } from '../../model/categoria';
import { CATEGORIA } from '../../confi/api.config';


/**
 * Generated class for the CategoriasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-categorias',
  templateUrl: 'categorias.html',
})
export class CategoriasPage {
  categorias: Categoria[] = CATEGORIA;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CategoriasPage');
  }

  navProdutos(id_categoria : number){
    this.navCtrl.push('ProdutosPage',{id : id_categoria});
  }

}
