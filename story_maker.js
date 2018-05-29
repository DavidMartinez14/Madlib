function makeStory() {
    // comment out the line below once you're sure this page is properly connected
    // to your HTML file.
     //alert("it works!");

    // get form values
    var name = document.getElementById('name').value;
    var noun1 = document.getElementById('noun1').value;
    var noun2 = document.getElementById('noun2').value;
    var verb1 = document.getElementById('verb1').value;
    var verb2 = document.getElementById('verb2').value;
    var verb3 = document.getElementById('verb3').value;
    var adjective1 = document.getElementById('adjective1').value;
    var adjective2 = document.getElementById('adjective2').value;
    var plural_noun1 = document.getElementById('plural_noun1').value;
    var plural_noun2 = document.getElementById('plural_noun2').value;
    var plural_noun3 = document.getElementById('plural_noun3').value;
    var plural_noun4 = document.getElementById('plural_noun4').value;
    var plural_profession = document.getElementById('plural_profession').value;

    // Set title of story.
    var title = "Where are your fingers";


    // Build story.
    var paragraph1 = " Hey! Vsauce " + name + " here,Where are your " + plural_noun1 + " ? most " + noun1 + " would look at this as a " + adjective1 + " question because they know that they can't watch a vsauce video without spectating a twist at the end. Now normally you'll say that your fingers are on your hand, and you're not completely wrong, they are on your hands.The average size for the " + noun2 + " finger is 11cm of length, from the fingertip to the knuckle, compared to a " + plural_noun2 + " paw, that's really " + adjective2 + " . ";

    var paragraph2 = " But how do you know your " + plural_noun3 + " are there? How do you know that anything is real? If you can put your tongue upside down and put your finger on the tip of it and " + verb1 + " it across, you'll feel your finger going the opposite direction.This feeling is caused by your senses, if you were upside down and " + verb2 + " forward, you'll feel like you're going backwards, but what does this mean? Well, what I'm trying to imply here is that we can twist or turn upside down our senses causing us to feel a new sense of reality " + adjective2 + " . ";

    var paragraph3 = " How do you know that you're real? A question that's been bothering humankind for hundreds, thousands of years... How do we know if anything is real?The words you're reading now, the chair you are sitting on, your friends, your family and relatatives... Does any of it exist in the way you think it does? It's something the ancient Greek " + plural_profession + " Plato thought about. A lot.He tried to explain his ideas in a story about a cave.In this cave lived a group of men.The men were all chained up to a wall in such a way they could only look forwards.They could only see the wall of the cave in front of them.On that wall are shadows cast from the outside world behind them. Shadows of the life in the outside world the men knew nothing about.These " + plural_noun4 + " are the only things the men can " + verb3 + ". And so they believe the shadows to be real. ";


    // Display story.
   document.getElementById('one').innerHTML = paragraph1;
   document.getElementById('two').innerHTML = paragraph2;
   document.getElementById('three').innerHTML = paragraph3;
}
