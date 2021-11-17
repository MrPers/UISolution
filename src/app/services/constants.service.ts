// import { Group } from 'src/app/services/constants.service';
import { Injectable } from '@angular/core';

export const URLpath = "https://localhost:44354/api/";
// export const URLpath = "https://localhost:5001/api/";


export class User{
  id:number = 0;
  name:string = "";
  surname:string = "";
  email:string = "";
}

export class StatusUser{
  id:number = 0;
  name:string = "";
  status?:boolean = false;
}

export class Dispatch{
  id: number | undefined;
  departureDate: any;
  status: boolean = false;
  UserId: number | undefined;
}

export class Group{
  id: number = 0;
  name: string = "";
  usersId: number[] = [];
}

export interface MailLetter{
  textBody: string;
  textSubject: string;
  users:User[];
}

export class UserGroup{
  groupId: number = 0;
  statusUsers: StatusUser[] = [];
}

export class ConstantsService {
  public groups: Group[] = [];
  public users: User[] = [];
  public dispatchs: Dispatch[] = [];
  public usersWithLetters: User[] = [];
  public textBody: string = "";
  public textSubject: string = "";
  public user: User = new User();
  public group: Group = new Group();
  public userGroup: UserGroup = new UserGroup();
  constructor() { }
}
