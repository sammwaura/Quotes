export class Quotes {
    public downvotes: number;
    public upvotes: number;
    public showDescription:boolean;
    constructor(public id:number, public name:string, public quotes:string, public postDate:Date,downvotes,upvotes){
        this.showDescription=false;
        this.upvotes=0;
        this.downvotes=0;
    }
}
