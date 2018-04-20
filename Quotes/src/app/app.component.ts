import { Component } from '@angular/core';
import { Quotes } from './quotes'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotes = [
    new Quotes(1,'Lightning makes no sound until it strikes', 'by Martin Luther King Jr',new Date(2018,4,20)),
    new Quotes(2,'Technique is not being able to juggle a ball 1000 times.Technique is passing the ball with one touch, with the right speed, at the right foot of your team mate.','by Johann Cruff',new Date(2018,4,19)),
    new Quotes(3,'All empires are created of blood and fire.','by Pablo Escobar',new Date(2018,4,20)),
    

  ]
}
