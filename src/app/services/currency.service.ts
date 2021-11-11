import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// import { CSVRecord } from '../modules/admin/pages/add-data/add-data.component';
import { URLpath, User, MailLetter } from './constants.service';

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

  sendLetter(letter: string, users: User[] ){
    // let formData = new FormData();
    // formData.append("letter", letter);
    // formData.append("mails[]", mails[0].id);
    // for (let index = 0; index < mails.length; index++) {
    //   formData.append("mails[]", mails[index]);
    // }
    // return this.http.post(URLpath + "sendletter", formData);

    let rt: MailLetter = {
      textLetter: letter,
      users: users
    };
    return this.http.post(URLpath + 'sendletter', rt, {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    });
  };
}


