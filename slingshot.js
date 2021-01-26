class Slingshot{
    constructor(bodyA,mypointb){
        var options = {
            bodyA: bodyA,
            pointB: mypointb,
            stiffness: 0.04,
            length: 10

        }
        this.pointB = mypointb;
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
fly(){
    this.sling.bodyA = null;
}
    display(){
        if(this.sling.bodyA)
        {
        var pointA = this.sling.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
} 
}