import { Component, OnInit } from '@angular/core';
import {Quotes} from '../quotes'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes = [
    new Quotes(1,'Lightning makes no sound until it strikes', 'by Martin Luther King Jr',new Date(2018,3,20) ),
    new Quotes(2,'Technique is not being able to juggle a ball 1000 times.Technique is passing the ball with one touch, with the right speed, at the right foot of your team mate.','by Johann Cruff',new Date(2018,4,19)),
    new Quotes(3,'All empires are created of blood and fire.','by Pablo Escobar',new Date(2018,4,20)),
  ]





        addNewQuote(quote) {
          let quoteLength = this.quotes.length;
          quote.id=quoteLength+1;
          quote.postDate = new Date(quote.postDate)
          this.quotes.push(quote)

        }

        
      deleteQuote(isPost,index){
        if (isPost){
            let toDelete=confirm(`Are you sure you want to delete ${this.quotes[index].name}`)

            if(toDelete){
              this.quotes.splice(index,1)
            }
        }
      }

  
  constructor() { }

  ngOnInit() {
  }

}
