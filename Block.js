class Block{
  constructor(x, y, width, height) {
      var options = {
          restitution :0.4,
          friction :0.0,
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.Visibility=255;
      World.add(world, this.body);
      this.image=loadImage("block.png");
    }
    display(){
      if(this.body.speed<2.2){

        image(this.image,this.body.position.x,this.body.position.y);
      }
      else{
        World.remove(world,this.body);
        push();
        this.Visiblity=this.Visiblity-5;
        tint(255, this.Visiblity);
        pop();
      }
  }
  // image(this.image,this.body.position.x,this.body.position.y);
}  // image.scale=0.25;