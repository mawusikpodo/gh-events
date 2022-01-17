import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { EventService } from '../shared/event.service';

@Injectable({
  providedIn: 'root'
})
export class EventRouteActivatorService implements CanActivate{

  constructor(private eventService: EventService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot) {
    const eventExist = !!this.eventService.getEvent(+route.params['id'])

    if (!eventExist)
      this.router.navigate(['/404'])
    return eventExist
  }
}
