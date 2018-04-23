export class Quotes {
  name: any;
  splice(arg0: any, arg1: any): any {
    throw new Error("Method not implemented.");
  }
    public showDescription:boolean
    constructor(public id:number, public author:string, public description:string, public postDate:Date){
        this.showDescription=false

    }
}
