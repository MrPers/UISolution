import { Group } from './../../../../services/constants.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ConstantsService } from 'src/app/services/constants.service';
import { CurrencyService } from 'src/app/services/currency.service';
import { DisplaygroypComponent } from '../displaygroyp/displaygroyp.component';

@Component({
  selector: 'app-creation-update-group',
  templateUrl: './creation-update-group.component.html',
  styleUrls: ['./creation-update-group.component.css']
})
export class CreationUpdateGroupComponent implements OnInit {
  myForm: FormGroup;
  group: Group = new Group();

  constructor(
    public displaygroypComponent: MatDialogRef<DisplaygroypComponent>,
    public constantsService: ConstantsService,
    private currencyService:CurrencyService
    ) {
      this.myForm = new FormGroup({
        "groupName": new FormControl("", [
          Validators.required,
          Validators.minLength(4)
        ]),
      });
     }

  ngOnInit(): void {
    this.group = this.constantsService.group;
  }

  submit(){
    if(this.group.id == 0){
      this.currencyService.addGroup(this.group)
      .subscribe((result : any) => {
      });
    }
    else{
      this.currencyService.updateGroup(this.group)
      .subscribe((result : any) => {
      });
    }
    this.constantsService.group = new Group();
    this.displaygroypComponent.close();
  }

}
