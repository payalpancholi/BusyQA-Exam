import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {User} from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
    
    constructor(private http : HttpClient) { }

    private headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    private baseUrl : string = "http://localhost:8080/users";
    private baseUrl1 : string = "http://localhost:8080/user";


listUsers() : Observable<User[]>{
return this.http.get<User[]>(`${this.baseUrl}/getAll`);
}


createUser(user: User): Observable<Object> {
return this.http.post(`${this.baseUrl}`, user,{headers: this.headers});
}

getUser(id : number) : Observable<User>{
  return this.http.get<User>(`${this.baseUrl1}/${id}`);
}

updateUser(id : number, user: User): Observable<Object>{
  return this.http.put(`${this.baseUrl}/${id}`,user);
}

deleteUser(id: any) : Observable<User>{
  return this.http.delete<User>(`${this.baseUrl1}/delete/${id}`,{headers : this.headers});
}
}
