
class Ground{
    constructor(x,y,width,height) {
      var options2 = {
        'isStatic': true
      }
      this.ground =Bodies.rectangle(x,y,width,height,options2);
      this.width = width;
      this.height= height;

      World.add(world,this.ground);
    }
    display(){
        var Pos = this.ground.position;
        rectMode(CENTER);
        fill("green");
        rect(Pos.x,Pos.y,this.width,this.height); 
    }
  };