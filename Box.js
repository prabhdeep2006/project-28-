class Box  {
  constructor(x, y, width, height){
var options={
  isStatic:true
}

    this.body=Bodies.rectangle(x,y,width,height,options);
    this.width=width;
    this.height=height;
    World.add(world,this.body);
  }
display(){
  var x=this.body.position;
  push();
  rectMode(CENTER);
  rect(x.x,x.y,this.width,this.height);
  pop();
}
 
}

