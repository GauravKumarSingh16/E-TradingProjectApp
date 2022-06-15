import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Share } from '../models/share';

@Injectable({
  providedIn: 'root'
})
export class ShareService {
  apiUrl=`${environment.baseApiurl}/shares`;

  constructor(private client:HttpClient) { }

  getShareList():Observable<Share[]>{
    return this.client.get<Share[]>(this.apiUrl)
  }

  add(share:any):Observable<Share>{
    return this.client.post<Share>(this.apiUrl,share);
  }

  getById(id:number): Observable<Share>{
    return this.client.get<Share>(`${this.apiUrl}/${id}`);
  }

  update(id:number, share:any): Observable<any>{
    return this.client.put(`${this.apiUrl}/${id}`,share);
  }

  delete(id:number):Observable<any>{
    return this.client.delete(`${this.apiUrl}/${id}`);
  }
}
