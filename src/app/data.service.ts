import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { SimpleGlobal } from 'ng2-simple-global';

@Injectable()
export class DataService {
  private sg: SimpleGlobal
  private productsSource;
  currentProducts;
  constructor() {
    // this.sg['products'] = []
    
    // if ('products' in this.sg) {
      this.productsSource = new BehaviorSubject<any>(localStorage.getItem('products'));
      this.currentProducts = this.productsSource.asObservable();
    // }
    // else {
    //   // this.sg['products'] = []
    //   this.currentProducts = this.productsSource.asObservable();



    // }
  }
  changeProducts(products: any) {
    this.productsSource.next(products)
  }

}
