import { Component, OnInit } from '@angular/core';

import swal from 'sweetalert2'; 
import { SuperchangepaswwordService } from './superchangepaswword.service';

@Component({
  selector: 'app-superchangepassword',
  templateUrl: './superchangepassword.component.html',
  styleUrls: ['./superchangepassword.component.scss']
})
export class SuperchangepasswordComponent implements OnInit {
  public username;
  constructor(private serve:SuperchangepaswwordService) { }
  oldpass='';
  pass1='';
  pass2='';
  ngOnInit() {
    this.username = localStorage.getItem('username')
    console.log(this.username)
  }
  editClick(oldpass,pass1,pass2) {
    console.log('edit',oldpass,pass1,pass2 );
console.log("TS OBJECT",);
    //Calling Delete Service
    this.serve.changepsd(this.username,oldpass,pass1,pass2 ).subscribe(data => {
        console.log(data);
        swal({
            type: 'success',
            title: 'Updated Your Profile',
            showConfirmButton: false,
            timer: 1500
          })
        // this.route.params.subscribe(params => {


        //     //  console.log('paramsssssssssss',params['username'])
        //     this.setPage(params['username'],1)
        //     //  this.setPage(1)

        // });
        // //  alert("junaid");
        // // this.data.currentProducts.subscribe(products => this.sg['products'] = products)
        // // this.data.currentProducts
        // this.Sub = this.route.params.subscribe(params => {
        //     this.username = +params['username'];
        //     //  this.setPage(1)
        //     // alert(this.username);
        // });

    }, error => {
     
    });
  //  window.location.reload();

}

}
