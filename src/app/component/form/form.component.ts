import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { QuotesClass } from 'src/app/quotes-class';



@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  
  @Output() formSubmitEvent = new EventEmitter<QuotesClass>()

  newQoute = new QuotesClass("","","","","",new Date(),0,0)
  

 
  submitQuote(){
    this.formSubmitEvent.emit(this.newQoute) 
  }
   
 

  constructor() { }

  ngOnInit(): void {
  }

}