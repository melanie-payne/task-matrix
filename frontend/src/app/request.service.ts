import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RequestService {
  private baseUrl = 'http://localhost:4000'; // Update the URL as needed

  constructor(private http: HttpClient) {}

  getRequestList(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/requests`);
  }

  deleteRequest(requestId: string): Observable<any> {
    const url = `${this.baseUrl}/requests/delete/${requestId}`;
    return this.http.delete(url);
  }
}

// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root',
// })
// export class RequestService {
//   private baseUrl = 'http://localhost:4000'; // Update the URL as needed

//   constructor(private http: HttpClient) {}

//   getRequestList(): Observable<any[]> {
//     return this.http.get<any[]>(`${this.baseUrl}/requests`);
//   }
// }
