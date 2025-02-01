import { Component, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})

export class CounterComponent {
  @Input({ required: true }) duration: number = 0;
  @Input({ required: true }) message: string = '';

  constructor() {
    // no async operations in constructor
    // before rendering the component
    //Only for initialization and one time
    this.duration = 12
    console.log("constructor");
    console.log('-'.repeat(10))
  }

  ngOnChanges(changes: SimpleChanges) {
    //before and during render
    console.log("ngOnChanges");
    console.log('-'.repeat(10))
    console.log(changes);
    const duration = changes['duration'];
    if (duration && duration.currentValue !== duration.previousValue) {
      this.doSomething();
    }
  }

  ngOnInit() {
    //after render 
    //only once
    //async, then, subscribe, fetch, etc
    console.log("ngOnInit");
    console.log('-'.repeat(10))
    console.log('duration => ', this.duration);
    console.log('message => ', this.message);
  }

  ngAfterViewInit() {
    // after ngOnInit and after render
    // async operations
    // fetch, subscribe, etc
    //only once
    console.log("ngAfterViewInit");
    console.log('-'.repeat(10))
  }

  ngOnDestroy() {
    // before destroy
    console.log("ngOnDestroy");
    console.log('-'.repeat(10))
  }


  doSomething() {
    console.log('change duration ');
  }
}
