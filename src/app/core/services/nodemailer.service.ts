import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NodemailerService {
  private http = inject(HttpClient);
private apiUrl = 'https://contact-form-node-production.up.railway.app/api/contact/send';

  sendMessage(data: {
    nombre: string;
    empresa: string;
    mensaje: string;
  }): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }
}
