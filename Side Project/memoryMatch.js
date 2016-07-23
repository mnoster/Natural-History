/**
 * Created by njporter10 on 7/7/16.
 */
var first_card_clicked = null;
var second_card_clicked = null;
var total_possible_matched = 2;
var times_played = 1;
var match_counter = 0;
var timesClicked = 0;
var click_counter=0;
// var randomize_cards = [[$('.American-Coot'),'AmericanCoot.jpg'],[$('.American-Coot'),'AmericanCoot.jpg'],[$('.mallard-duck'),'Mallard Duck.jpg'],[$('.mallard-duck'),'Mallard Duck.jpg'],[$('.mourning-dove'),'mourning-dove.jpg'],[$('.mourning-dove'),'mourning-dove.jpg'],[$('.Wood-duck'),'wood-duck-pain.jpg'],[$('.Wood-duck'),'wood-duck-pain.jpg'],[$('.pied-billed-grebe'),'PiedBilledGrebe.jpg'],[$('.pied-billed-grebe'),'PiedBilledGrebe.jpg'], [$('.great-blue-heron'),'great-blue-heron.jpg'], [$('.great-blue-heron'),'great-blue-heron.jpg']];
//
// function randomize_cards1(){
//
//     var rand_num = Math.floor(Math.random());
//     randomize_cards[rand_num];
//
// }
//--------------------------card_area variable is made so that the info is stored in cache------------------------------------
var card_area  = $('.card-area');

$(document).ready(function(){

   $('.card-contain').on('mouseup',function card_clicked() {
       $(this).children('.back').css('z-index', '1'); //shows the bird image
       click_counter++; //increases the click counter by one
       timesClicked++; // increases variable later used for accuracy

       if(timesClicked === 1){ //condtional to store  bird-class name in variable
           first_card_clicked = $(this).children($('.back')).children($('img')).attr('class');
           console.log(first_card_clicked);
       }


       if(timesClicked > 1){  //conditional to store second bird name in variable
            $(this).css('z-index', '1');
            timesClicked = 0;
            second_card_clicked = $(this).children($('.back')).children($('img')).attr('class');
            console.log(second_card_clicked);

                if(first_card_clicked==second_card_clicked){
                    alert("Great Match You Found: " + second_card_clicked);
                   //  $(this).remove();
                   // $(this).removeClass('.back');
                    match_counter++;

//----------------------this is the number of matches and type of birds---------------------------
                    var matches = $('<li>',{ //new info (attempts) to be added to the stats
                        addClass: 'birdName',
                        appendTo: $('.attempts'),
                        html: 'Match ' + match_counter +" - " + " Bird Name: " + second_card_clicked,
                        style: 'color: blue; list-style-type: none'
                    });
                }
                else{
                    alert("Try Again");
                   $('.back').css('z-index', '0');
                     // $(this).children('.back').css('z-index', '0'); //returns all the cards to the front
                }
 //--------------------this displays that you win to the window----------------------------------
           if(match_counter == 8){
               var you_win = $('<div>',{
                   appendTo:$('h1'),
                   style: "height:100px; width: 300px; background-color: red; font-size:20px; position:absolute; z-index:1;padding-top:30px;border-radius:20px",
                   text: 'You found all the bird matches!'
               });
               alert('You found all the bird matches!');
               $('.back').css('z-index', '1');
           }
        }

//---------------------this displays the accuracy of the player----------------------------------
       var accuracy = ((match_counter*2)/click_counter).toFixed(2) *100;
       $('.accuracy').html(accuracy+ "%");
       $('.accuracy').show();
   });
      
    
//---------------------reset button specs--------------------------------------------------------
    $('#reset-game').on('mouseup', function(){
        first_card_clicked = null;
        second_card_clicked = null;
        total_possible_matched = 2;
        match_counter = 0;
        timesClicked = 0;
        click_counter=0;
        accuracy = 0;
        $('.accuracy').hide();
        $('.back').css('z-index', '0');
        $('.birdName').remove();
        $('.times-played').html(times_played++);

    });

    
});

