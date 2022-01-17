import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventService } from '../shared/event.service';
import { IEvent } from '../shared/events.model';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {
  event: IEvent | undefined
  constructor( private eventService: EventService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.event = this.eventService.getEvent
      (+this.route.snapshot.params['id'])
  }

  cancel() {
    this.router.navigate(['/events'])
  }

}
