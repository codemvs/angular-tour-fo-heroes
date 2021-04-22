import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; // Holds information about the route to this instance
import { Location } from '@angular/common'; // is an Angular service for interacting with the browser

import {Hero} from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  @Input() hero?:Hero;
  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location    
  ) { }

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void{
    const id = Number( this.route.snapshot.paramMap.get('id') );
    this.heroService.getHero(id)
        .subscribe(hero => this.hero = hero);
  }
  goBack(): void{
    this.location.back();
  }
  save(): void{
    this.heroService.updateHero(this.hero)
        .subscribe(()=>this.goBack());
  }
}
