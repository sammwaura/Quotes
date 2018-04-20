import { Component, OnInit, Input } from '@angular/core';
import { Quotes} from '../quotes'
@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {

  isPost: any;
  @Input() quote:Quotes;
        quoteDelete(complete:boolean){
          this.isPost.emit(complete);
        }
        deleteQuote(isPost,index){
              if (isPost){
                let toDelete=confirm(`Are you sure you want to delete ${this.quote[index].name}`)


                if(toDelete){
                      this.quote.splice(index,1)
                }
              }
        }
  constructor() { }

  ngOnInit() {
  }

}
