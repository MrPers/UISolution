import { Injectable } from '@angular/core';

export const URLpath = "https://localhost:44354/api/";

export interface User{
  id:number;
  name:string;
  surname:string;
  email:string;
}

export interface Group{
  id:number;
  name:string;
}

export interface MailLetter{
  textLetter:string;
  users:User[];
}

export class ConstantsService {
  user: User | undefined;
  users: User[] | undefined;
  public textMessage: string ="";
  public isSend:boolean = false;
  constructor() { }
}
