//http://www.farlandworld.com/files/TowersofNight5e.pdf

var levelArray = [];

var Level = function(lev, desc, obj, enemy){
  this.level = lev;
  this.info = desc;
  this.items = [];
  this.enemies = enemy;

};

// Order of commands
// [talk, pickup, go, run, lookat, check]

var Object = function(name, description, talk, pickup, go, run, fight) {
  this.objectName = name;
  this.check = description;
  this.talk = talk;
  this.pickup = pickup;
  this.go = go;
  this.run = run;
  this.fight = fight;
  this.help = "Please target one of the items in [brackets]."
};

//All Objects
var levelOneWearyMan = new Object("weary-man", "The man has rough hands and deep set eyes. He's worked hard for too long. There is a long scar across his forearm. It looks like it was from a sword.", "He does not want to talk to you.", "You try to pick him up, but he pulls a knife on you and you stop", "You go to him, but he shoos you away", "You run from the man, and he doesn't even notice. What are you doing??");

var levelOneMiddleAgedMan = new Object("middle-aged man", "He looks like he has something to say.", "level-up", "You can't do that", "You walk over to the man, and he begins to speak", "You don't have a reason to run");

var levelTwoPaper = new Object("paper", "This is a contract for a reward of one thousand gold coins.", "You can't talk to a paper. You look crazy", "level-up", "Where would you go to?", "game-over");

var levelThreeBlacksmith = new Object("blacksmith", "He is sharpening your blade as you watch from a distance.", "You can't talk from this far away.", "This is an odd request", "level-up", "There is nowhere to run")

var levelThreeTent = new Object("tent", "There is nothing spectacular about your tent.", "Stop talking to inanimate objects", "Your tent is firmly planted on the ground, but you manage to rip it from the ground. Everyone around you is wondering why you destroyed your tent", "You approach your tent. It smells like the pigs next to it.", "You cannot run at the moment");

var levelThreePigs = new Object("pigs", "They are smelly and covered in mud", "You whistle at the pigs, and you get their attention. But they soon return to eating whatever it is in their troff", "You pig up the pig, and you smell like pig now.", "You approach the pigs. They make grunting noises", "You cannot run at the moment");

var levelFourHunt = new Object("hunt", "You cannot check this.", "You cannot talk to this.", "You cannot pick this up", "level-up", "level-up");

var levelFiveOrcs = new Object("orcs", "You look behind the tree. They stop, aware that there is someone around.", "Are you sure you want to do this?", "You cannot do this now", "You go to orcs and die. Refresh the page. Game OVER.", "You run from the orcs. Game Over.", "level-up");

//All Levels
var level1 = new Level(1, "The decor in the tent is spartan, to put it mildly. There is a support in the center, on which hangs an unlit lantern. At the end opposite the entrance is a table, seemingly designed to fit snug and secure into one of the carts you saw as you were lead through the camp. On the other side of the tent are three humans, each seated on a simple wooden stool. On the left is a [middle-aged man], dressed in worn leather armor. It is obvious that, while he is no great hero, he has seen his fair share of battles. In the center is a young, plain looking woman, dressed in simple commoner's clothing. On the far right stool is seated a [weary-man], obviously past his prime, who has spent a life working hard. Each one looks at you with interest in his or her eyes.", [levelOneWearyMan, levelOneMiddleAgedMan]);


var level2 = new Level(2, "The middle aged man turns to you. 'A’ite lads and lasses. Here's the deal. You are here because you have nowhere else to go in Zeland. We have a problem you can solve. There are one too many undead as of late. They generally wander in from the north, from the Battleplain. None of our men can be spared now, so it’ s up to you. If you wish to join us, we need proof of your worth. Stop the source of the dead, whatever it is. It shouldn't be too hard; the dead are weak, so whatever is making them should be as well. Take this [paper], and go into the wilds.", [levelTwoPaper]);

var level3 = new Level(3, "You grab the paper and agree to the terms. It's time to get ready. The camp is busy with movement. There in the north side of the camp is the [blacksmith]. Your [tent] is next to some [pigs], which will likely soon be slaughtered for meat.")

var level4 = new Level(4, "You approach the blacksmith. He lifts the sword up and says, 'This is a fine blade. Too bad I have to give it back.' You take the sword, sheath it, and now your ready for the [hunt].");

var level5 = new Level(5, "You're a few miles out of the camp. The forest light is dimming, and out across the trees, you hear the echoing sound of orc feet. You pause, looking around. Your heartbeat elevates. This is the fight you've been wanting. The footsteps are approaching quickly. You see them through the trees and position yourself behind one of them. They are nearly there. The [orcs] are nearly right on top of you.")

var level6 = new Level(6, "Test Level");



levelArray.push(level1, level2, level3, level4, level5);
