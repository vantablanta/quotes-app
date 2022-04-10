import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { QuotesClass } from 'src/app/quotes-class'
import { faStar, faThumbsDown, faThumbsUp, faTrash} from '@fortawesome/free-solid-svg-icons';



@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  faStar = faStar;
  faThumbsDown =faThumbsDown
  faThumbsUp = faThumbsUp
  faTrash = faTrash

  @Input() details!: QuotesClass[]
  @Output() upVoteEvent = new EventEmitter
  @Output() downVoteEvent = new EventEmitter
  @Output() deleteEvent = new EventEmitter

  constructor() {

  }

  vote!: number
  arr!: number[]
  highest!: number

  upVote(index: number) {
    this.details[index].quoteUpVote += 1
    this.arr = this.details.map(function (upVote) {
      return upVote.quoteUpVote
    })
    this.highest = Math.max(...this.arr)
  }

  downVote(index: number) {
    this.details[index].quoteDownVote += 1
  }

  delete(index:number){
    this.deleteEvent.emit(index)
  }

  text: boolean = false
  showDesc() {
    this.text = true
  }

  ngOnInit(): void {

  }

}
