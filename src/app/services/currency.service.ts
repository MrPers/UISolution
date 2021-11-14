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

  getUsers(id:number){
    if(id == 0)
      return this.http.get(URLpath + 'getuserall/');
    else
      return this.http.get(URLpath + 'getuserongroup/' + id);
  };

  getGroupAll(){
    return this.http.get(URLpath + 'getgroupall/');
  };

  statusLetter(){
    return this.http.get(URLpath + 'statusletter/');
  };

  deleteUser(id:number){
    return this.http.get(URLpath + 'deleteuser/' + id);
  };

  sendLetter(textBody: string, textSubject: string, users: User[] ){

    let rt: MailLetter = {
      textBody: textBody,
      textSubject: textSubject,
      users: users
    };
    return this.http.post(URLpath + 'sendletter', rt, {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    });
  };

  getHistoryLette(user: User){
    return this.http.get(URLpath + 'historylette/' + user.id);
  };

  addUser(user: User){
    let formData = new FormData();
    formData.append("Id", user.id.toString());
    formData.append("Name", user.name);
    formData.append("Surname", user.surname);
    formData.append("Email", user.email);
    return this.http.post(URLpath + "registuser", formData);
  };

  updateUser(user: User){
    let formData = new FormData();
    formData.append("Id", user.id.toString());
    formData.append("Name", user.name);
    formData.append("Surname", user.surname);
    formData.append("Email", user.email);
    return this.http.post(URLpath + "updateuser", formData);
  };
}
