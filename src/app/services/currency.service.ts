import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// import { CSVRecord } from '../modules/admin/pages/add-data/add-data.component';
import { URLpath, User, MailLetter, Group, UserGroup } from './constants.service';

@Injectable({
  providedIn: 'root'
})

export class CurrencyService {

  constructor(private http:HttpClient ) {}

  getHistoryLette(user: User){
    return this.http.get(URLpath + 'historylette/' + user.id);
  };

  getUsersAll(){
    return this.http.get(URLpath + 'getuserall/');
  };

  getGroupAll(){
    return this.http.get(URLpath + 'getgroupall/');
  };

  deleteUser(id:number){
    return this.http.delete(URLpath + 'deleteuser/' + id);
  };

  statusLetter(){
    return this.http.get(URLpath + 'statusletter/');
  };

  sendLetter(mailLetter: MailLetter ){
    return this.http.post(URLpath + 'sendletter', mailLetter, {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    });
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

  deleteGroup(id:number){
    return this.http.delete(URLpath + 'deletegroup/' + id);
  };

  updateGroup(group: Group){
    let formData = new FormData();
    formData.append("Id", group.id.toString());
    formData.append("Name", group.name);
    return this.http.post(URLpath + "updategroup", formData);
  };

  addGroup(group: Group){
    let formData = new FormData();
    formData.append("Id", group.id.toString());
    formData.append("Name", group.name);
    return this.http.post(URLpath + "registgroup", formData);
  };

  deleteUsersinGroup(userGroup: {idGroup:number, idUsers:number[]}){
    return this.http.post(URLpath + 'deletestatususergroup', userGroup, {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    });
  };

  addUsersinGroup(userGroup: {idGroup:number, idUsers:number[]}){
    return this.http.post(URLpath + 'addstatususergroup', userGroup, {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    });
  };


}
