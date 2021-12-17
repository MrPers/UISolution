import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-call-api',
  templateUrl: './call-api.component.html',
  styles: []
})
export class CallApiComponent implements OnInit {

  response!: any;
  constructor(private http: HttpClient, private authService: AuthService) { }

  ngOnInit() {
    this.http.get("http://localhost:5000/site/secret", { headers: this.authService.getAuthorizationHeaderValue(), responseType: "text"})
      .subscribe((data:any) => {
        // this.response = data.value.data;
        this.response = data;
      });
  }

}
