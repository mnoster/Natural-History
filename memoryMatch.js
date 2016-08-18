var app = angular.module("myApp", []);

app.directive('card', function () {
    return {
        restrict: 'AE',
        templateUrl: 'cards.html'
    }
});
app.controller("appController", function ($timeout) {
    var self = this;
    self.imgObjArray = [];
    self.cardsClicked = [];
    self.clickCardCounter = 0;
    self.matchCounter = 0;
    self.accuracy = 0;
    self.timesPlayed = 0;
    self.randomArr = [];
    self.bird_types = ['American Coot', "Anna\'s Hummingbird", "Double Crested Cormorant", "Dead Fish", "Great Blue Heron", "Mallard Duck", "Mourning Dove", "Pied-billed Grebe", "Wood Ducks","Tree Swallow",'American Coot', "Anna\'s Hummingbird", "Double Crested Comorant", "Dead Fish", "Great Blue Heron", "Mallard Duck", "Mourning Dove", "Pied-billed Grebe", "Wood Ducks","Tree Swallow"];
    self.imgArray = ['MemoryMatchPhotos/AmericanCoot.jpg', "MemoryMatchPhotos/Anna\'s Hummingbird.jpg", "MemoryMatchPhotos/double crested comorant.jpg", "MemoryMatchPhotos/fish.png", "MemoryMatchPhotos/great-blue-heron.jpg", "MemoryMatchPhotos/Mallard Duck.jpg", "MemoryMatchPhotos/mourning-dove.jpg", "MemoryMatchPhotos/PiedbilledGrebe.jpg", "MemoryMatchPhotos/wood-duck-pair.jpg","MemoryMatchPhotos/TreeSwallow.jpg",'MemoryMatchPhotos/AmericanCoot.jpg', "MemoryMatchPhotos/Anna\'s Hummingbird.jpg", "MemoryMatchPhotos/double crested comorant.jpg", "MemoryMatchPhotos/fish.png", "MemoryMatchPhotos/great-blue-heron.jpg", "MemoryMatchPhotos/Mallard Duck.jpg", "MemoryMatchPhotos/mourning-dove.jpg", "MemoryMatchPhotos/PiedbilledGrebe.jpg", "MemoryMatchPhotos/wood-duck-pair.jpg","MemoryMatchPhotos/TreeSwallow.jpg"];
    self.randomArray = function (arr) {
        self.randomArr = [];
        var counter = 0;
        while (arr.length > 0) {
            var randomIndex = Math.floor(Math.random() * arr.length);
            var item = arr.splice(randomIndex, 1);
            self.randomArr.push(item[0]);
            counter++;
            if (counter > 1000) {
                break;
            }
        }
        return self.randomArr;
    };
    self.processImgs = function (array) {
        for (var i = 0; i < self.imgArray.length; i++) {  //create a new array w/ objects instead of strings
            var obj = {};         //the objects will have three properties: 1. img path 2. Hide back 3. Bird Name
            obj.url = self.imgArray[i];
            obj.birdName = self.bird_types[i];
            obj.hide_back = false;
            obj.show_name =false;
            self.imgObjArray.push(obj);
        }
        self.randomArray(self.imgObjArray);
        self.imgObjArray = self.randomArr;
    };
    self.processImgs();
    self.clickCards = function (card) {

        if(card.hide_back == true ){
            return;
        }
        self.cardsClicked.push(card);
        if (self.cardsClicked.length <= 2) {
            card.hide_back = true;
            if (self.cardsClicked.length > 1) {
                if (self.cardsClicked[0].url == self.cardsClicked[1].url) {
                    card.hide_back = true;
                    self.cardsClicked = [];
                    self.matchCounter++; //increases the click counter by one
                    card.show_name = true;
                }
                else {
                    $timeout(function(){
                        self.cardsClicked[0].hide_back = false;
                        self.cardsClicked = [];
                        card.hide_back = false;
                    },900)
                }
            }
        }
        self.clickCardCounter++; //increases the click counter by one, later to be used to determine accuracy
        self.accuracy = Math.round((self.matchCounter *2 /self.clickCardCounter)* 100) + "%";

        if(self.matchCounter == 9){
            for(var i = 0; i < self.imgObjArray; i++){
                self.imgObjArray[i].hide_back = true;
            }
            alert("You have matched all the birds!")
        }
    };
    self.reset =function(){
        self.timesPlayed++;
        self.imgObjArray = [];
        self.cardsClicked = [];
        self.clickCardCounter = 0;
        self.matchCounter = 0;
        self.accuracy = 0;
        self.randomArr = [];
        for(var i = 0; i < self.imgObjArray; i++){
            self.imgObjArray[i].hide_back = false;
        }
        self.processImgs();
    };
});