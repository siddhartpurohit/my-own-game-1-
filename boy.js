class Boy{
    constructor(x,y,r){
        var options ={
            restitutuon:0.01,
            friction:0.2,
            density:0.4
        }
        this.image = loadImage("s.gif");
        this.body = Bodies.circle(x,y,r/2,options)
        this.x = x
        this.y = y
        this.r = r
        World.add(world, this.body)
    }
     display(){
            var pos = this.body.position;
         push();
            imageMode(CENTER) 
            image(this.image,pos.x,pos.y,this.r,this.r);
         pop();
     }
         
}