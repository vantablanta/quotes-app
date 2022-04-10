import { Component, OnInit } from '@angular/core';
import { QuotesClass } from 'src/app/quotes-class';


@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  quotesObject: QuotesClass[] = [
    new QuotesClass(
      "https://cdn.pixabay.com/photo/2016/11/19/11/11/hands-1838658_960_720.jpg",
      "Life isn't about getting and having, it's about giving and being",
      "Life",
      "Kevin Kruse",
      "Mwangi Mbutia",
      new Date("2019-01-16"),
      0,
      0
    ),
    new QuotesClass(
      "https://cdn.pixabay.com/photo/2015/01/08/18/24/children-593313_960_720.jpg",
      "Winning isn't everything, but wanting to win is.",
      "Success",
      "Vince Lombardi",
      "Sloba Travis",
      new Date("2002-06-30"),
      0,
      0
    ),
    new QuotesClass(
      "https://cdn.pixabay.com/photo/2018/01/11/09/52/three-3075752_960_720.jpg",
      "My style is not that big. I wear heels, tight pants, and I wear diamonds.",
      "Fashion",
      "Donatella Versace",
      "Dickson Kui",
      new Date("2008-12-04"),
      0,
      0
    ),
    new QuotesClass(
      "https://cdn.pixabay.com/photo/2021/04/13/06/59/woman-6174830_960_720.jpg",
      "You can't use up creativity.  The more you use, the more you have.",
      "Creativity",
      "Maya Angelour",
      "Rafiki Kizito",
      new Date("1998-07-31"),
      0,
      0
    ),
    new QuotesClass(
      "https://cdn.pixabay.com/photo/2018/03/23/11/57/girl-3253532_960_720.jpg",
      "If you want something said, ask a man; if you want something done, ask a woman.",
      "Girl Power",
      "Margaret Thatcher",
      "Fatuma Mchafu",
      new Date("2021-05-22"),
      0,
      0
    ),
    new QuotesClass(
      "https://cdn.pixabay.com/photo/2018/03/26/02/08/woman-3261425_960_720.jpg",
      "What's money? A man is a success if he gets up in the morning and goes to bed at night and in between does what he wants to do.",
      "Money",
      "Bob Dylan",
      "Kasuku Mlimbwende",
      new Date("2012-01-17"),
      0,
      0
    ),
    new QuotesClass(
      "https://cdn.pixabay.com/photo/2017/08/06/18/05/people-2594745_960_720.jpg",
      "Whatever our souls are made of, his and mine are the same.",
      "Love",
      "Emily Brontë",
      "Morris Muthumbi",
      new Date("2022-01-27"),
      0,
      0
    ),
    new QuotesClass(
      "https://cdn.pixabay.com/photo/2015/03/14/19/45/suit-673697_960_720.jpg",
      "People often say that motivation doesn't last. Well, neither does bathing - that's why we recommend it daily.",
      "Comedy",
      "Zig Zigler",
      "Michelle Njeri",
      new Date("2019-06-22"),
      0,
      0
    ),

  ]

  updateQuotes(quote: QuotesClass) {
    this.quotesObject.push(quote)
  }






  constructor() {


  }


  ngOnInit(): void {
  }

}






