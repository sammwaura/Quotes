export class Quotes {

  public downvotes: number;
  public upvotes: number;
      public showDescription:boolean;
    constructor(public id:number, public name:string, public quotes:string, public postDate:Date){
        this.showDescription=false

    }
}
