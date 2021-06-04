class Box{

   constructor(x,y,width,height){

    var balloptions = {

        restitution:1
    
      }
    
      this.body = Bodies.rectangle(x,y,width,height,balloptions);
    
      World.add(world,this.body);
      
   }   
    
    display(){

      rect(this.body.position.x,this.body.position.y,20,20);  
   }
   
}