class rectangle{
    constructor(height,width,color){
        this.height=height;
        this.width=width;
        this.color=color;
    }

    area(){
        const area=this.height*this.width;
        return area;
    }

    paint(){
         console.log(`the color is ${this.color}`);
    }
}


const rect=new rectangle(3,6,"red")
console.log(rect.area());
rect.paint();

const now= new Date();
console.log(now.getFullYear());

const map= new Map();
map.set('name','Pushkar');
map.set('Age','21');
map.set('Roll','230817');

console.log(map.get('Roll'))
console.log(map.get('Age'))
console.log(map.get('name'))