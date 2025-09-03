import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class mailerService {
  private apiUrl = 'https://contact-form-node-production.up.railway.app/api/contact/send';
  // private apiUrl = 'http://localhost:3001/api/contact/send';


  async sendMessage({
    name,
    subject,
    text,
  }: any): Promise<any> {
    try {
      const response = await fetch(this.apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, subject, text })
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`HTTP error ${response.status}: ${errorText}`);
      }

      return await response.json();
    } catch (error) {
      console.error('Error sending message:', error);
      throw error;
    }
  }
}
