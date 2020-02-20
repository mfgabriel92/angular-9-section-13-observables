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
        if (count === 0) {
          observer.complete();
        }
        if (count % 2 !== 0) {
          observer.error(new Error('Not an even number'));
        }
        count++;
      }, 1000);
    });

    this.mySubscription = customIntervalObservable.subscribe(
      count => {
        console.log(count);
      },
      error => {
        console.log(error);
      },
      () => {
        alert('Completed');
      }
    );
  }

  ngOnDestroy() {
    this.mySubscription.unsubscribe();
  }
}
