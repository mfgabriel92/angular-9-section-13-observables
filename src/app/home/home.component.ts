import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  private mySubscription: Subscription;

  constructor() {}

  ngOnInit(): void {
    const customIntervalObservable = Observable.create(observer => {
      let count = 0;

      setInterval(() => {
        observer.next(count);
        count++;
      }, 1000);
    });

    this.mySubscription = customIntervalObservable.subscribe(count => {
      console.log(count);
    });
  }

  ngOnDestroy() {
    this.mySubscription.unsubscribe();
  }
}
