window.onload = function () {

    //Code to randomly select 5% of the LBJ project sections (14 sections) for each quartly audit.
    //Once the sections are chosen they will be removed from the available sections
    //The goal is to inspect every section on the project without repeating a section from a previous quarter


    //split sections by direction to make it easier to manage
    //create arrays by adding the direction string to number 1 thru total number of sections in that direction
    //ie "NB"+x where x is the number from 1 to total number in that direction.

    //NB Sections Array
    var NBsections = [];
    for (var n = 1; n <= 50; n++) {
        let sectionNum = "NB" + n;
        NBsections.push(sectionNum);
    }
    // console.log(NBsections);

    //SB Sections Array
    var SBsections = [];
    for (var s = 1; s <= 50; s++) {
        let sectionNum = "SB" + s;
        SBsections.push(sectionNum);
    }
    // console.log(SBsections);

    //EB Sections Array
    var EBsections = [];
    for (var e = 1; e <= 50; e++) {
        let sectionNum = "EB" + e;
        EBsections.push(sectionNum);
    }
    // console.log(EBsections);

    //WB Sections Array
    var WBsections = [];
    for (var w = 1; w <= 50; w++) {
        let sectionNum = "WB" + w;
        WBsections.push(sectionNum);
    }
    // console.log(WBsections);

    //Array to hold all sections on the project.
    //*Try to figure out the best way to do this. There are over 270 sections*
    var allSections = [].concat.apply([], [NBsections, SBsections, EBsections, WBsections]);
    // allSections.push(NBsections + SBsections + EBsections + WBsections);

    console.log(allSections);

    //Q1 randomly chosen sections
    //*Do I need to create a variable for each Quarter? That would be approx 20 variable to cover all sections.*
    var i = 1;
    var Q1 = [];
    while (i < 15) {
        var rand = allSections[Math.floor(Math.random() * allSections.length)];
        Q1.push(rand);
        i++;
    }
    console.log(Q1);


};