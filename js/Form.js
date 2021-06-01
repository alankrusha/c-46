class Form{
    constructor(){

        
    }
    
    hide(){
        this.input.hide();
        this.button.hide();
        this.title.hide();
    }

    display(){
       this.title = createElement('h1');
       this.title.html("ROCK PAPER SCISSORS");
       this.title.position(400, 30);

       this.input = createInput("NAME");
       this.input.position(450, 200);

       this.button = createButton('START');
       this.button.position(500, 300);

       this.reset = createButton('reset');
       this.reset.position(500, 650);
       

        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
             
            player.name = this.input.value();
            playerCount+=1;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);

        });

        this.reset.mousePressed(()=>{
            player.updateCount(0);
            game.update(0);

            var playerInfoRef = database.ref('players');
            playerInfoRef.remove();
        })




    }
}



