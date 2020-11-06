class Box {
    constructor(x,y,width,height){
        var option = {
            restitution:1,
            friction : 1,
            density: 0.5
        }
        this.body = Bodies.rectangle(x,y,width,height,option);
        this.width = width;
        this.height = height;

        World.add(world,this.body);
    
    }
    display(){
        push();
        translate(this.body.position.x,this.body.position.y);
        rotate(this.body.angle);
        fill ("green");
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();
}
}