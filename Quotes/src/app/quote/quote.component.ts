import { Component, OnInit } from '@angular/core';
import {Quotes} from '../quotes'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes = [
    new Quotes(1,'Lightning makes no sound until it strikes', 'by Martin Luther King Jr'),
    new Quotes(2,'Technique is not being able to juggle a ball 1000 times.Technique is passing the ball with one touch, with the right speed, at the right foot of your team mate.','by Johann Cruff'),
    new Quotes(3,'All empires are created of blood and fire.','by Pablo Escobar'),
    

  ]
  constructor() { }

  ngOnInit() {
  }

}
