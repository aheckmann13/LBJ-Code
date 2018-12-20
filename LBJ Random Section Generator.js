//Code to randomly select 5% of the LBJ project sections (14 sections) for each quartly audit.
//Once the sections are chosen they will be removed from the available sections
//The goal is to inspect every section on the project without repeating a section from a previous quarter


//split sections by direction to make it easier to manage
//create arrays by adding the direction string to number 1 thru total number of sections in that direction
//ie "NB"+x where x is the number from 1 to total number in that direction.

//NB Sections Array
var n = 1;
while (n < 110) {
    var NBsections = ["NB" + n];
    n++;
 }
 document.write(NBsections);
 
 //Array to hold all sections on the project.
 //*Try to figure out the best way to do this. There are over 270 sections*
 var allSections = [];
 
 //Q1 randomly chosen sections
 //*Do I need to create a variable for Quarter? That would be approx 20 variable to cover all sections.*
 var Q1 = allSections[Math.floor(Math.random() * allSections.length)];
 
 