import { Component, OnInit } from '@angular/core';
import { ChangepasswordService } from '../changepassword.service';
import swal from 'sweetalert2'; 

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.scss']
})
export class ChangepasswordComponent implements OnInit {
public username;
  constructor(private serve:ChangepasswordService) { }
  oldpass='';
  pass1='';
  pass2='';
  ngOnInit() {
    this.username = localStorage.getItem('change')
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
      

    }, error => {
     
    });
  //  window.location.reload();

}
}
