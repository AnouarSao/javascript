// nom, le prenom, l'age, etat marital
const nom:string="Lisangola";
const prenom:string="Christian";
const age:number=30;
const estMarie:boolean=false;

//
let pays:string="France";
pays=67;// Assignation d'un `number` à un `string`

//
let equipe="FC Barcelone"
equipe=true;

//
interface User{
    id:number;
    firstName:string;
    lastName:string;
    age:number;
    isMarried:boolean;
}


const users:User[]=[
    {firstName:"Christian",lastName:"Lisangola",age:30,isMarried:false,id:2},
    {firstName:"Jordan",lastName:"Prevot",age:30,isMarried:false,id:3}
]


function somme(a:number,b:number){
    return a+b;
}

users.map(function(user){
    console.log(user.age)
})

users.push("papy");
users.push(true);
users.push({ id: 1, name: "fdjfh" });

class Employee{
    private id:number;
    private names:string;
    constructor(id:number,names:string){
        this.id=id;
        this.names=names;
    }

    public getNames():string{
        return this.names;
    }

    public setNames(names:string):void{
        this.names=names;
    }
}