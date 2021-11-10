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

export class ConstantsService {
  user: User | undefined;
  users: User[] | undefined;
  constructor() { }
}
