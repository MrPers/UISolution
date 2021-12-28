import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
// import { CSVRecord } from '../modules/admin/pages/add-data/add-data.component';
import { URLpath, User, MailLetter, Group, UserGroup } from './constants.service';

@Injectable({
  providedIn: 'root'
})

export class CurrencyService {

  constructor(private http:HttpClient, private authService: AuthService ) {}

  getHistoryLette(user: User){
    return this.http.get(URLpath + 'get-history-lette/' + user.id, { headers: this.authService.getAuthorizationHeaderValue()});
  };

  getLette(id: number){
    return this.http.get(URLpath + 'get-lette/' + id, { headers: this.authService.getAuthorizationHeaderValue()});
  };

  getUsersAll(){
    return this.http.get(URLpath + 'get-users-all/', { headers: this.authService.getAuthorizationHeaderValue()});
    // return this.http.get(URLpath + 'get-users-all/', { headers: this.authService.getAuthorizationHeaderValue()});
  };

  getGroupAll(){
    return this.http.get(URLpath + 'get-groups-all/', { headers: this.authService.getAuthorizationHeaderValue()});
  };

  deleteUser(id:number){
    return this.http.delete(URLpath + 'delete-user/' + id, { headers: this.authService.getAuthorizationHeaderValue()});
  };

  statusLetter(){
    return this.http.get(URLpath + 'status-letter/', { headers: this.authService.getAuthorizationHeaderValue()});
  };

  sendLetter(mailLetter: MailLetter ){
    return this.http.post(URLpath + 'send-letter', mailLetter, { headers: this.authService.getAuthorizationHeaderValue()});
  };

  addUser(user: User){
    let formData = new FormData();
    formData.append("Id", user.id.toString());
    formData.append("Name", user.name);
    formData.append("Surname", user.surname);
    formData.append("Email", user.email);
    return this.http.post(URLpath + "regist-user", formData, { headers: this.authService.getAuthorizationHeaderValue()});
  };

  updateUser(user: User){
    let formData = new FormData();
    formData.append("Id", user.id.toString());
    formData.append("Name", user.name);
    formData.append("Surname", user.surname);
    formData.append("Email", user.email);
    return this.http.post(URLpath + "update-user", formData, { headers: this.authService.getAuthorizationHeaderValue()});
  };

  deleteGroup(id:number){
    return this.http.delete(URLpath + 'delete-group/' + id, { headers: this.authService.getAuthorizationHeaderValue()});
  };

  updateGroup(group: Group){
    let formData = new FormData();
    formData.append("Id", group.id.toString());
    formData.append("Name", group.name);
    return this.http.post(URLpath + "update-group", formData, { headers: this.authService.getAuthorizationHeaderValue()});
  };

  addGroup(group: Group){
    let formData = new FormData();
    formData.append("Id", group.id.toString());
    formData.append("Name", group.name);
    return this.http.post(URLpath + "regist-group", formData, { headers: this.authService.getAuthorizationHeaderValue()});
  };

  deleteUsersinGroup(userGroup: {idGroup:number, idUsers:number[]}){
    return this.http.post(URLpath + 'delete-user-group', userGroup, { headers: this.authService.getAuthorizationHeaderValue()});
  };

  addUsersinGroup(userGroup: {idGroup:number, idUsers:number[]}){
    return this.http.post(URLpath + 'add-user-group', userGroup, { headers: this.authService.getAuthorizationHeaderValue()});
  };


}
