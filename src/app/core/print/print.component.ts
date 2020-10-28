import { Component, OnInit } from '@angular/core';
import { UsersService ,Users} from 'src/app/shared/services/users.service';

@Component({
  selector: 'app-print',
  templateUrl: './print.component.html',
  styleUrls: ['./print.component.css']
})
export class PrintComponent implements OnInit {

  users: Users[];
  constructor( usersService: UsersService) {
    this.users = usersService.users;
    
    
  }

  ngOnInit(): void {
  }

}
