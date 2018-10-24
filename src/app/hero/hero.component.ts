import { Component, OnInit } from '@angular/core';
import { Hero } from '../entity/hero';
import { HEROES } from './hero-database';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  public heroes = HEROES;
  public selectedHero: Hero;

  public hero: Hero = {

    id: 1,
    name: "I am Hero"
  };


  constructor() { }

  ngOnInit() {
  }

  onSelect(hero) {
    this.selectedHero = hero;
  }
}
