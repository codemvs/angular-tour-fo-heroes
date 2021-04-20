import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {Hero} from './hero';
import { HEROES } from './mock-heores';

import {MessageService} from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(
    private messageService: MessageService
  ) { }
  getHeroes():Observable< Hero[]> {
    const heroes = of(HEROES);
    this.messageService.add('HeroService: ferched heroes');
    return heroes;
  }
}