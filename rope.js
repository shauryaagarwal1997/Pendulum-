class Rope{
    constructor(bodyA,pointB){

        var options={
            bodyA:bodyA,
            pointB:pointB,

            stiffness:0.6,
            length:250
        }
        this.rope=Matter.Constraint.create(options);
        World.add(world,this.rope);
    }
    display(){
        stroke(0,0,0);
        strokeWeight(3);
    line(this.rope.bodyA.position.x,this.rope.bodyA.position.y,this.rope.pointB.x,this.rope.pointB.y)
    }
}
