// Chapter1

// Answer of Question 1
// I write script js using alert box
// alert()

// Answer of Question 2
// alert( "Error! please enter a valid password" )

// Answer of Question 3
// alert( "Welcome to JS Land \n Happy coding!" )

// Answer of Question 4
// alert( "Welcome to JS Land " )
// alert("Prevent this page  to create additional dialogs")

// Answer of Question 5
// console.log("Hello.. i can run  through my web browser's console ")

// Chapter2

// Answer of Question 1
// var username="Ghous Ahmed";
// alert(username)

// Answer of Question 2
// var MyName="Rao Muhammad shayan"
// alert(MyName)
// Answer of Question 3
// var message="Hello World"
// alert(message);
// Answer of Question 4
// var a="shayan" ,b="18 years old", c="Certified Mobile Application Developer";
// alert(a+b+c)
// Answer of Question 5
// var a = "pizza";
// var b = "pizz";
// var c = "piz";
// var d = "pi";
// var e = "p";
// Answer of Question 6
// alert(a + "\n" + b + "\n" + c + "\n" + d + "\n" + e);
// Answer of Question 6
// var a="shayn123@gmail.com";
// alert("my email address is"+ " " +a  );

// Answer of Question 7
// var book="A smarter way to learn js ";
// alert("Im trying to learn javascript"+ "\n" + "" +book);

// Answer of Question 8
// document.write("<h1>"+"<em>"+ "yes, I can write content in html using javascript"+"</em>"+"</h1>")

// Answer of Question 9
// var a=" “▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬”"
// alert(a);

// Chapter3
// Answer of Question 1
// var age=19;
// alert("i'm " +age+ " "+ "year old")

// Answer of Question 2
// var n = 14; // Number of visits
// var a = 1; // Initialize visit count

// for (var i = 0; i < n; i++) {
//     alert("you've visited the site " + a);
//     a++; // Increment the visit count
// }
// Answer of Question 2
// var BirthYear=2005;
// document.write("<h1>"+ "My Birth year is"+ " "+ BirthYear+"</h1>"+ " \n"+ "<p>"+"Data type of my declare variable is number" + "</p>")

// var rizwan = 78;
// var TimSouthee = 2;
// var n = 100;

var BabarAzam = 0, rizwan = 29;
var n = 6;
var TimSouthee = 2;

for (var i = 0; i < n; i++) { // Use a for loop
    BabarAzam++; // Increment BabarAzam
    document.write("<h1>" + "Babar has Runs: " + BabarAzam + "</h1>"); // Display Babar's runs
    rizwan++; // Increment rizwan
    document.write("<h1>" + "Rizwan has Runs: " + rizwan + "</h1>"); // Display Rizwan's runs
    
    var partnership = rizwan - BabarAzam; // Calculate partnership
    
    // Check if it's the 2nd ball of Tim Southee
    if (TimSouthee !==7) { 
        document.write("<h1>It's " + TimSouthee + " ball of Tim Southee</h1>"); // Display message for Tim Southee
        TimSouthee++;
    }
  
    document.write("<hr/>");
    document.write("<h1>" + "On Every ball They did a partnership of: " + partnership + "</h1>"); // Display partnership
}
