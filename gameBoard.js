
/**
* A gameSquare has three parameters:
* name: official name of square
* type: an integer that represents what type of square it is (used in switch statement)
* value: an object holding the fields necessary for that type of*        property   
**/
function gameSquare(name, num, propObj){
   this.name = name;
   this.type = num;
   this.value = propObj;
}


/**
* A property square has the following parameters/fields:
* cost: cost of purchasing the property
* rent: cost of rent
* houseCost: cost of house
* rent1-5: cost of rent with one to five houses  
* mortgage: value of mortgage
*
***/

function property(cost, rent, houseCost, rent1, rent2, rent3, rent4, rent5, mortgage, color){
   this.cost=cost;
   this.rent=rent;
   this.houseCost=houseCost;
   this.rent1=rent1;
   this.rent2=rent2;
   this.rent3=rent3;
   this.rent4=rent4;
   this.rent5=rent5;
   this.mortgage=mortgage;
   this.color=color;
}

/**
* A railroad has the following parameters/fields:
* cost: cost of purchase
* rent: rent per railroad owned (totalRent = rent * # railroads owned)
* mortgage: mortgage value
**/

function railroad(cost, rent, mortgage){
   this.cost=cost;
   this.rent=rent;
   this.mortgage=mortgage;
} 

/**
* A tax square has the following parameters/fields:
* 
*
**/
function tax(isLuxury, isIncome){
   this.isLuxury=isLuxury;
   this.isIncome=isIncome;
}

/**
* A utility square has the following parameters:
* cost: cost of utility
* mortgage: mortgage value
*
**/
function utility(cost,mortgage){
   this.cost=cost;
   this.mortgage=mortgage;
}

/**
* A jail square has one parameter:
* goToJail: boolean
*
**/
function jail(goToJail){
   this.goToJail=goToJail;
}

function  gameBoard(){
   this[0] = new gameSquare("GO", 8, null);
   this[1] = new gameSquare("Mediterranean Avenue", 0, new property(60, 2, 50, 10, 30, 90, 160, 250, 30, "brown"));
   this[2] = new gameSquare("Community Chest", 3, null);
   this[3] = new gameSquare("Baltic Avenue", 0, new property(60, 4, 50, 20, 60, 180, 320, 450, 30, "brown"));
   this[4] = new gameSquare("Income Tax", 5, new tax(false, true));
   this[5] = new gameSquare("Reading Railroad", 1, new railroad(200, 25, 100));
   this[6] = new gameSquare("Oriental Avenue", 0, new property(100, 6, 50, 30, 90, 270, 400, 550, 50, "lightblue")); 
   this[7] = new gameSquare("Chance", 4, null);
   this[8] = new gameSquare("Vermont Avenue", 0, new property(100, 6, 50, 30, 90, 270, 400, 550, 50, "lightblue"));
   this[9] = new gameSquare("Connecticut Avenue", 0, new property(120, 8, 50, 40, 100, 300, 450, 600, 60, "lightblue"));
   this[10] = new gameSquare("Just Visiting Jail", 6, new jail(false));
   this[11] = new gameSquare("St. Charles Place", 0, new property(140, 10, 100, 50, 150, 450, 625, 750, 70, "magenta"));
   this[12] = new gameSquare("Electric Company", 2, new utility(150,75));
   this[13] = new gameSquare("States Avenue", 0, new property(140, 10, 100, 50, 150, 450, 625, 750, 70, "magenta"));
   this[14] = new gameSquare("Virginia Avenue", 0, new property(160, 12, 100, 60, 180, 500, 700, 900, 80, "magenta"));
   this[15] = new gameSquare("Pennsylvania Railroad", 1, new railroad(200, 25, 100));
   this[16] = new gameSquare("St. James Place", 0, new property(180, 14, 100, 70, 200, 550, 750, 950, 90, "orange"));
   this[17] = new gameSquare("Community Chest", 3, null);
   this[18] = new gameSquare("Tennessee Avenue", 0, new property(180, 14, 100, 70, 200, 550, 750, 950, 90, "orange"));
   this[19] = new gameSquare("New York Avenue", 0, new property(200, 16, 100, 80, 220, 600, 800, 1000, 100, "orange"));
   this[20] = new gameSquare("Free Parking", 7, null);
   this[21] = new gameSquare("Kentucky Avenue", 0, new property(220, 18, 150, 90, 250, 700, 875, 1050, 110, "red"));
   this[22] = new gameSquare("Chance", 4, null);
   this[23] = new gameSquare("Indiana Avenue", 0, new property(220, 18, 150, 90, 250, 700, 875, 1050, 110, "red"));
   this[24] = new gameSquare("Illinois Avenue", 0, new property(240, 20, 150, 100, 300, 750, 925, 1100, 120, "red"));
   this[25] = new gameSquare("B. &. O. Railroad", 1, new railroad(200, 25, 100))
   this[26] = new gameSquare("Atlantic Avenue", 0, new property(260, 22, 150, 110, 330, 800, 975, 1150, 130, "yellow"));
   this[27] = new gameSquare("Ventnor Avenue", 0, new property(260, 22, 150, 110, 330, 800, 975, 1150, 130, "yellow"));
   this[28] = new gameSquare("Water Works", 2, new utility(150, 75));
   this[29] = new gameSquare("Marvin Gardens", 0, new property(280, 24, 150, 120, 360, 850, 1025, 1200, 140, "yellow"));
   this[30] = new gameSquare("Go To Jail", 6, new jail(true));
   this[31] = new gameSquare("Pacific Avenue", 0, new property(300, 26, 200, 130, 390, 900, 1100, 1275, 150, "green"));
   this[32] = new gameSquare("North Carolina Avenue", 0, new property(300, 26, 200, 130, 390, 900, 1100, 1275, 150, "green"));
   this[33] = new gameSquare("Community Chest", 3, null);
   this[34] = new gameSquare("Pennsylvania Avenue", 0, new property(320, 28, 200, 150, 450, 1000, 1200, 1400, 160, "green"));
   this[35] = new gameSquare("Shortline Railroad", 1, new railroad(200, 25, 100));
   this[36] = new gameSquare("Chance", 4, null);
   this[37] = new gameSquare("Park Place", 0, new property(350, 35, 200, 175, 500, 1100, 1300, 1500, 175, "blue"));
   this[38] = new gameSquare("Luxury Tax", 5, new tax(true, false));
   this[39] = new gameSquare("Boardwalk", 0, new property(400, 50, 200, 200, 600, 1400, 1700, 2000, 200, "blue"));

};
