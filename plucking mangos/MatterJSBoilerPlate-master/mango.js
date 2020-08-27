class Mango{
    constructor(x,y){
        var options={
            isStatic: true
        }
        this.body = Bodies.rectangle(x,y,10,10,options)
        this.image=loadImage("Plucking mangoes/mango.png")
        this.image.scale=0.1;
       
        World.add(world,this.body);
    }
    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
    }

}