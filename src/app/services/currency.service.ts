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
    return this.http.get(URLpath + 'get-history-lette/' + user.id);
  };

  getLette(id: number){
    return this.http.get(URLpath + 'get-lette/' + id);
  };

  getUsersAll(){
    return this.http.get(URLpath + 'get-users-all/');
  };

  getGroupAll(){
    return this.http.get(URLpath + 'get-groups-all/');
  };

  deleteUser(id:number){
    return this.http.delete(URLpath + 'delete-user/' + id);
  };

  statusLetter(){
    return this.http.get(URLpath + 'status-letter/');
  };

  sendLetter(mailLetter: MailLetter ){
    return this.http.post(URLpath + 'send-letter', mailLetter, {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    });
  };

  addUser(user: User){
    let formData = new FormData();
    formData.append("Id", user.id.toString());
    formData.append("Name", user.name);
    formData.append("Surname", user.surname);
    formData.append("Email", user.email);
    return this.http.post(URLpath + "regist-user", formData);
  };

  updateUser(user: User){
    let formData = new FormData();
    formData.append("Id", user.id.toString());
    formData.append("Name", user.name);
    formData.append("Surname", user.surname);
    formData.append("Email", user.email);
    return this.http.post(URLpath + "update-user", formData);
  };

  deleteGroup(id:number){
    return this.http.delete(URLpath + 'delete-group/' + id);
  };

  updateGroup(group: Group){
    let formData = new FormData();
    formData.append("Id", group.id.toString());
    formData.append("Name", group.name);
    return this.http.post(URLpath + "update-group", formData);
  };

  addGroup(group: Group){
    let formData = new FormData();
    formData.append("Id", group.id.toString());
    formData.append("Name", group.name);
    return this.http.post(URLpath + "regist-group", formData);
  };

  deleteUsersinGroup(userGroup: {idGroup:number, idUsers:number[]}){
    return this.http.post(URLpath + 'delete-user-group', userGroup, {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    });
  };

  addUsersinGroup(userGroup: {idGroup:number, idUsers:number[]}){
    return this.http.post(URLpath + 'add-user-group', userGroup, {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    });
  };


}
