
export class QuotesClass {
    quoteImage: string
    quoteBody: string
    quoteCategory: string
    quoteAuthor: string
    quotePoster: string
    quoteDate : any
    quoteUpVote: number
    quoteDownVote : number
    

    constructor(quoteImage:string, quoteBody: string, quoteCategory: string, quoteAuthor:string, quotePoster: string, quoteDate:any, quoteUpVote:number, quoteDownVote:number){
        this.quoteImage = quoteImage
        this.quoteBody = quoteBody
        this.quoteCategory = quoteCategory
        this.quoteAuthor = quoteAuthor
        this.quotePoster = quotePoster
        this.quoteDate = quoteDate
        this.quoteUpVote = quoteUpVote
        this.quoteDownVote  = quoteDownVote
    }

    

}
