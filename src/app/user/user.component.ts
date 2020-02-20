import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { UserService } from './user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit, OnDestroy {
  id: number;
  activation: Subscription;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.activation = this.route.params.subscribe((params: Params) => {
      this.id = +params.id;
    });
  }

  ngOnDestroy(): void {
    this.activation.unsubscribe();
  }

  onActivateClick(): void {
    this.userService.activated.next(true);
  }
}
