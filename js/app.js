$( document ).ready(function() {
   
    var app = {
                app_block: null,
                deck: [],
                init: function(el_id) {
                    this.app_block = $(`#${el_id}`);
                    this.makeDeck()
                    this.rdaw();
                },

                makeDeck: function(){
                    var faces = ['S','C','D','H'];
                    var rank = [2,3,4,5,6,7,8,9,10];
                    for(var i=0; i<=faces.length-1; i++){
                        console.log(faces[i]);
                        for(var j=0; j<=rank.length-1; j++){
                            var cardname = `${rank[j]}${faces[i]}.png`
                            //console.log(cardname);
                            this.deck.push(cardname);
                        }
                    }
                    console.log(this.deck);
                },
        
                makeCard: (cardname) => {
                    return `<div class="card">
                    <img width="100" src="/images/${cardname}">
                    </div>`
                },
        
                rdaw: function() {
                    this.deck.forEach((el) => {
                        this.app_block.append(
                            this.makeCard(el)
                        );
                    });
 
                }
            }
    
    console.log(app);
    app.init('my_app');
    //app.rdaw();


});
