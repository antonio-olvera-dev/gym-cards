import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  public users:Users[]=[];
  constructor() { }
}

export interface Users {
  name: string,
  heigh: string,
  weigh: string,
  email: string,
  adress: string,
  validators: string

}