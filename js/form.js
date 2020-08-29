class Form {
  constructor() {}
  display() {
    color("red");
    var title = createElement("h1");
    title.html("Is your city sustainable?");
    title.position(600, 100);
    var Ques1 = createElement("h2");
    Ques1.html("Does your city have proper water supply? ");
    Ques1.position(450, 150);
    var YES = createButton("YES");
    var nO = createButton("NO");
    YES.position(450, 240);
    nO.position(450, 200);
    YES.style("backgroundColor","BLUE")
    nO.style("backgroundColor","red")
    

    YES.mousePressed(function () {
      YES.hide();
      nO.hide();

      
    });
    nO.mousePressed(function () {
      YES.hide();
      nO.hide();

      
    });
    var Ques2 = createElement("h2");
    Ques2.html("Does your city have usual electric cut-offs?? ");
    Ques2.position(450, 250);
    var Yes1 = createButton("YES");
    var no1 = createButton("NO");
    Yes1.position(450, 340);
    no1.position(450, 300);
    Yes1.style("backgroundColor","BLUE")
    no1.style("backgroundColor","red")

    Yes1.mousePressed(function () {
      Yes1.hide();
     no1.hide();

    });
    no1.mousePressed(function () {
      Yes1.hide();
     no1.hide();

    });
    var Ques3 = createElement("h2");
    Ques3.html("Is garbage disposal done regularly? ");
    Ques3.position(450, 350);

    var Yes2 = createButton("YES");
  
    var No2= createButton("NO");
    Yes2.position(450, 440);
    No2.position(450, 400);
    Yes2.style("backgroundColor","BLUE")
    No2.style("backgroundColor","red")

    Yes2.mousePressed(function () {
     Yes2.hide();
      No2.hide();
    });
    No2.mousePressed(function () {
      Yes2.hide();
     No2.hide();

    });
    var Ques4 = createElement("h2");
    Ques4.html("Are you happy with the amount of greenery in your city?");
    Ques4.position(450, 450);

    var yes3 = createButton("YES");
    var no3 = createButton("NO");
    yes3.position(450, 540);
    no3.position(450, 500);
    yes3.style("backgroundColor","BLUE")
    no3.style("backgroundColor","red")

    yes3.mousePressed(function () {
      yes3.hide();
      no3.hide();
    });
    no3.mousePressed(function () {
      yes3.hide();
      no3.hide();
    });
    var Ques5 = createElement("h2");
    Ques5.html("Do the local traders encourage use of plastic?  ");
    Ques5.position(450, 550);

    var yes4 = createButton("YES");
    var no4 = createButton("NO");
    yes4.position(450, 640);
    no4.position(450, 600);
    yes4.style("backgroundColor","BLUE")
    no4.style("backgroundColor","red")

    yes4.mousePressed(function () {
      no4.hide();
      yes4.hide();
    });
    no4.mousePressed(function () {
      no4.hide();
      yes4.hide();
    });
    var button6 = createButton("END!");
    button6.position(600, 750);
    button6.style("fontSize","20px")
    button6.style("color","orange")

    button6.mousePressed(function () {
      button6.hide();

      var thankyou = createElement("h1");
      thankyou.html("Thank you for spending your valuable time!");
      thankyou.position(450, 750);
      thankyou.style("color","blue");
      
    });
  }
}
