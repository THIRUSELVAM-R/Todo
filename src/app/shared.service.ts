import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  readonly APIUrl="https://localhost:44392/api";

  constructor(private http:HttpClient) { }
  gettodoList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/todos');
  }
  
  addtodo(val:any){
    return this.http.post(this.APIUrl+'/todos',val);
  }

  updatetodo(Id:number,val:any){
    return this.http.put(this.APIUrl+'/todos/'+Id,val);
  }

  deletetodo(val:any){
    return this.http.delete(this.APIUrl+'/todos/'+val);
  }

  getedittodo(Id:number)
  {
    return this.http.get(this.APIUrl+'/todos/'+Id);
  }
  
}
