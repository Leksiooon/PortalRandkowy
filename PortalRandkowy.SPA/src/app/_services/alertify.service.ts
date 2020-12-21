import { Injectable } from '@angular/core';
declare let alertify: any;

@Injectable({
  providedIn: 'root'
})
export class AlertifyService {

constructor() { }

success(message: string){
  alertify.success(message);
}

error(message: string){
  alertify.error(message);
}

warning(message: string){
  alertify.worning(message);
}

message(message: string){
  alertify.message(message);
}

}
