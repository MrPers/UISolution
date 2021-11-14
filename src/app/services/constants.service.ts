import { Injectable } from '@angular/core';

export const URLpath = "https://localhost:44354/api/";

export class User{
  id:number = 0;
  name:string = "";
  surname:string = "";
  email:string = "";
}

export class Dispatch{
  id: number | undefined;
  departureDate: any;
  status: boolean = false;
  UserId: number | undefined;
}

export class Group{
  id:number = 0;
  name:string = "";
}

export interface MailLetter{
  textBody: string;
  textSubject: string;
  users:User[];
}

export class ConstantsService {
  public user: User = new User();
  public dispatchs: Dispatch[] = [];
  public textBody: string = "";
  public textSubject: string = "";
  public isSend:boolean = false;
  constructor() { }
}
