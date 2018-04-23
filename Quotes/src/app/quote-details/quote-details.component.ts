import { Component, OnInit, Input,Output, EventEmitter } from '@angular/core';
import { Quotes} from '../quotes'
@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {


  quotes: any;
  @Input() quote:Quotes;
  @Output() isPost= new EventEmitter<boolean>();

        quoteDelete(complete:boolean){
          this.isPost.emit(complete);
        }
 

        deleteQuote(isPost,index){
              if (isPost){
                let toDelete=confirm(`Are you sure you want to delete ${this.quote[index].name}`)


                if(toDelete){
                      this.quotes.splice(index,1);
                }
              }
        }
  constructor() { }

  ngOnInit() {
  }

}
