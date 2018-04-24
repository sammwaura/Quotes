import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { Quotes } from '../quotes'
@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {
  @Input() quotes:Quotes
  @Output() deleteComplete=new EventEmitter<boolean>()
  
  quoteDelete(deleted:boolean) {
    this.deleteComplete.emit(deleted)

  }
  constructor() { }

  ngOnInit() {
  }

}
