import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignatureService {
  private signatureData = new BehaviorSubject<any>({
    name: '',
    email: '',
    company: '',
    phone: '',
    website: ''
  });

  signatureData$ = this.signatureData.asObservable();

  updateSignatureData(data: any) {
    this.signatureData.next(data);
  }
}
