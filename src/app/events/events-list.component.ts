import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from '../common/toastr.service';
import { EventService } from './shared/event.service';
import { IEvent } from './shared/events.model';


@Component({
  template: `
  <h1>Upcoming Events in Ghana</h1>
  <hr>
  <div class="row">
  <div class="col-md-5" *ngFor="let event of events">
  <app-events-thumbnail (click)="handleThumbnailClick(event.name)" [event]="event"></app-events-thumbnail>
  </div>
  </div>
  `,
  styles: [
  ]
})
export class EventsListComponent implements OnInit {
  events!: IEvent[];

  constructor( private eventService: EventService, private toastr: ToastrService, private route: ActivatedRoute) { 
  }

  ngOnInit(): void {
    this.events = this.route.snapshot.data['events']
  }

  handleThumbnailClick(eventName: any){
    this.toastr.success(eventName)
  }

}
