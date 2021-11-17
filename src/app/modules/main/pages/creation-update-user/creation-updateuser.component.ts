import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ConstantsService, User } from 'src/app/services/constants.service';
import { CurrencyService } from 'src/app/services/currency.service';
import { TableComponent } from '../table/table.component';

@Component({
  selector: 'app-creation-updateuser',
  templateUrl: './creation-updateuser.component.html',
  styleUrls: ['./creation-updateuser.component.css']
})

export class CreationUpdateUserComponent implements OnInit {
  myForm: FormGroup;
  user: User = new User();

  constructor(
    public tableComponent: MatDialogRef<TableComponent>,
    public constantsService: ConstantsService,
    private currencyService:CurrencyService
    ) {
      this.myForm = new FormGroup({
        "userName": new FormControl("", [
          Validators.required,
          Validators.minLength(4)]),
        "userSurname": new FormControl("", [
            Validators.required,
            Validators.minLength(4)]),
        "userEmail": new FormControl("", [
            Validators.required,
            Validators.email
        ]),
      });
     }

  ngOnInit(): void {
    this.user = this.constantsService.user;
  }

  submit(){
    if(this.user.id == 0){
      this.currencyService.addUser(this.user)
      .subscribe((result : any) => {
      });
    }
    else{
      this.currencyService.updateUser(this.user)
      .subscribe((result : any) => {
      });
    }
    this.constantsService.user = new User();
    this.tableComponent.close();
  }

}
