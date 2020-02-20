import { Component, OnInit } from '@angular/core';
import { UserService } from './user/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isActive = false;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.activated.subscribe((isActivated: boolean) => {
      this.isActive = isActivated;
    });
  }
}
