import { Component, OnInit } from '@angular/core';
import { FormGroupDirective } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ConstantsService, User, StatusUser, UserGroup } from 'src/app/services/constants.service';
import { CurrencyService } from 'src/app/services/currency.service';
import { DisplaygroypComponent } from '../displaygroyp/displaygroyp.component';

@Component({
  selector: 'app-usersin-group',
  templateUrl: './usersin-group.component.html',
  styleUrls: ['./usersin-group.component.css']
})
export class UsersinGroupComponent implements OnInit {
  statusUsers: StatusUser[] = [];

  constructor(
    public displaygroypComponent: MatDialogRef<DisplaygroypComponent>,
    public constantsService: ConstantsService,
    private currencyService:CurrencyService
    ) {}

  ngOnInit(): void {
    for (let index = 0; index < this.constantsService.userGroup.statusUsers.length; index++) {
      this.statusUsers.push({
        id: this.constantsService.userGroup.statusUsers[index].id,
        name: this.constantsService.userGroup.statusUsers[index].name,
        status: this.constantsService.userGroup.statusUsers[index].status,
      });
    }

  }

  save(){
    let idUsersAdd: number[]=[];
    let idUsersDelete: number[]=[];

    for (let index = 0; index < this.statusUsers.length; index++) {
      if(this.statusUsers[index].status !== this.constantsService.userGroup.statusUsers[index].status){
        if(this.statusUsers[index].status){
          idUsersAdd.push(this.statusUsers[index].id);
        }
        else{
          idUsersDelete.push(this.statusUsers[index].id);
        }
      }
    }

    if(idUsersAdd.length > 0){
      this.currencyService.addUsersinGroup({idGroup: this.constantsService.userGroup.groupId, idUsers: idUsersAdd})
      .subscribe((result : any) => {
    });
    }
    if(idUsersDelete.length > 0){
      this.currencyService.deleteUsersinGroup({idGroup: this.constantsService.userGroup.groupId, idUsers: idUsersDelete})
      .subscribe((result : any) => {
    });
    }

  }

}
