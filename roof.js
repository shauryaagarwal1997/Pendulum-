class Roof{
    constructor(x,y,width,height){
        var options={
            isStatic:true 
        }

        this.width=width
        this.height=height

        this.body=Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.body);
    }
    display(){
        stroke(0,0,0);
        strokeWeight(3);
        rect(this.body.position.x,this.body.position.y,400,50);
        }
}