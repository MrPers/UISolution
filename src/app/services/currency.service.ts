import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// import { CSVRecord } from '../modules/admin/pages/add-data/add-data.component';
import { URLpath } from './constants.service';

@Injectable({
  providedIn: 'root'
})

export class CurrencyService {

  constructor(private http:HttpClient ) {}

  getUser(id:number){
    if(id == 0)
      return this.http.get(URLpath + 'getuserall/');
    else
      return this.http.get(URLpath + 'getuserongroup/' + id);
  };

  getGroupAll(){
    return this.http.get(URLpath + 'getgroupall/');
  };

  sendLetter(Letter: string, mails: string[] ){
    debugger;
    return this.http.post(URLpath + "sendletter", {//
      Letter, mails}, {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    });
  };


  // registerUser(body: any){
  //   return this.http.post(URLpath + "regist", body, {
  //     // headers: new HttpHeaders({'Content-Type': 'application/json'})
  //   });
  // };
}


