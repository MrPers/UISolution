import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ConstantsService, Group, User, UserGroup } from 'src/app/services/constants.service';
import { TableComponent } from '../table/table.component';
import { CurrencyService } from 'src/app/services/currency.service';
import { CreationUpdateGroupComponent } from '../creation-update-group/creation-update-group.component';
import { UsersinGroupComponent } from '../usersin-group/usersin-group.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-displaygroyp',
  templateUrl: './displaygroyp.component.html',
  styleUrls: ['./displaygroyp.component.css']
})

export class DisplaygroypComponent implements OnInit {
  groups: Group[] = [];

  constructor(
    private router: Router,
    public dialog: MatDialog,
    public tableComponent: MatDialogRef<TableComponent>,
    public constantsService: ConstantsService,
    private currencyService:CurrencyService
    ) {}

    ngOnInit(): void {
      for (let index = 1; index < this.constantsService.groups.length; index++) {
        this.groups[index-1] = this.constantsService.groups[index];
      }
    }


  editListUser(group:Group){
    let Id = 0;
    this.constantsService.userGroup.groupId = group.id;
    for (let item of this.constantsService.users) {
      if(item.id == group.usersId[Id])
      {
        this.constantsService.userGroup.statusUsers.push({
          id : item.id,
          name : item.name,
          status : true,
        });
        Id++;
      }
      else
      {
        this.constantsService.userGroup.statusUsers.push({
          id : item.id,
          name : item.name,
          status : false,
        });
      }
    }

    this.dialog.open(UsersinGroupComponent)
    .afterClosed().subscribe(result => {
      this.constantsService.userGroup = new UserGroup();
      this.tableComponent.close();
    });

  }

  renameGroup(group:Group){
    this.constantsService.group = group;
    this.dialog.open(CreationUpdateGroupComponent)
    .afterClosed().subscribe(result => {
      this.tableComponent.close();
    });
  }

  addGroup(){
    this.dialog.open(CreationUpdateGroupComponent)
    .afterClosed().subscribe(result => {
      this.tableComponent.close();
      // this.router.navigate(['/']);
    });

  }

  deleteGroup(id:number){
    this.currencyService.deleteGroup(id)
    .subscribe((result : any) => {
      this.tableComponent.close();
      // this.router.navigate(['/auth-callback']);
    });

  }
}
