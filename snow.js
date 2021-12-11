class snow{
    constructor(x,y,w,h){
     this.x=x;
     this.w=w;
     this.h=h;
     this.y=y;
     this.r=20;
     this.body=Bodies.circle(this.x,this.y,r)
     this.image=loadImage("snow4.webp");
    }
    display(){
     ellipse(this.body.position.x,this.body.position.y,20);
     
    }
}