import {Component, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {ResidentialDialog2Component} from "./residential-dialog2/residential-dialog2.component";
import { ErrorStateMatcher } from '@angular/material/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';

import { Subscription } from 'rxjs/Subscription';
import { Http, Response, Headers } from '@angular/http';
import { applyRedirects } from "@angular/router/src/apply_redirects";
import { Router } from "@angular/router";
import { Config } from "../Config";
import { ActivatedRoute, RouterModule } from "@angular/router";
import { SimpleGlobal } from 'ng2-simple-global';
import { DataService } from '../data.service';
// import { ICarouselConfig, AnimationConfig } from 'angular4-carousel';
/**
 * @title Dialog Overview
 */
export class errorMatcher implements ErrorStateMatcher {
    isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
        const isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    }
}
@Component({
    selector: 'dialog-overview-example',
    templateUrl: 'residential.component.html'
})

export class DialogOverviewExample {

    name: string;
  

    constructor(public dialog: MatDialog, private router: Router,private route: ActivatedRoute, private sg: SimpleGlobal, private data: DataService, private Http: Http) {}
//  constructor(private obj: HomeService, private router: Router, private route: ActivatedRoute, private sg: SimpleGlobal, private data: DataService, private Http: Http) {
      
//}

    openDialog(): void {
        let dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
            // width: '300px',
            //data: { name: this.name, animal: this.animal }
           
            
        });

        dialogRef.afterClosed().subscribe(result => {
            //console.log('The dialog was closed');
            //this.animal = result;
        });
    }
  
    openDialog2(): void {
        let dialogRef = this.dialog.open(ResidentialDialog2Component, {
           //width: '400px',
            //data: { name: this.name, animal: this.animal }
        });

        dialogRef.afterClosed().subscribe(result => {
            //console.log('The dialog was closed');
            //this.animal = result;
        });
    }

}

@Component({
    selector: 'dialog-overview-example-dialog',
    templateUrl: 'residential-dialog.html',
})

export class DialogOverviewExampleDialog {
    zipCode = '';
    constructor(private router: Router,
        public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
        @Inject(MAT_DIALOG_DATA) public data: any) { }

    // onNoClick(): void {
    //     this.dialogRef.close();
    // }
    onSubmit() {
        this.router.navigate(['/products/' + this.zipCode]);
        this.dialogRef.close();
    }
        digitsOnly = '^[0-9,-]+$';
        //  public model: any = {};
       
    
        zip_code = new FormControl('', [
            Validators.pattern(this.digitsOnly)
        ]);
}
