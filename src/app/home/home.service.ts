import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  url: string = environment.APIURL + 'user/';
  constructor(private http: HttpClient) { }

  getAllUsers() {
    return this.http.get(this.url + 'allusers');
  }

  getdatainexcel():any{		
		return this.http.get(this.url + 'excelExp', { responseType: 'blob'});
   }

       
}
