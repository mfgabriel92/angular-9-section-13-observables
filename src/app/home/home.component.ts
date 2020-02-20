import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  private mySubscription: Subscription;

  constructor() {}

  ngOnInit(): void {
    this.mySubscription = interval(1000).subscribe(count => {
      console.log(count);
    });
  }

  ngOnDestroy() {
    this.mySubscription.unsubscribe();
  }
}
