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

var levelSixSkeletons = new Object("skeletons", "The skeletons are walking around aimlessly.", "You cannot talk to the skeletons", "You cannot pickup these skeletons... yet", "level-up", "You run away", "level-up");

var levelSevenBones = new Object("bones", "The bones seem to radiating with energy", "You say, 'Should have stayed dead.' Then you spit on the ground.", "level-up", "You cannot get any closer", "There is no need to run now", "You've already fought");

var levelEightTower = new Object("tower", "The stairs up to the tower entrance are placed at a gentle slope, made of old, whole logs.", "You cannot talk to the tower.", "You cannot pickup the tower", "level-up");

var levelNineStairs = new Object("stairs", "The stairs are sturdy, and covered in a strange moss", "You cannot talk to the stairs", "You cannot pickup the stairs", "level-up", "You run, trip on the stairs, and now you're at the bottom")

//All Levels
var level1 = new Level(1, "The decor in the tent is spartan, to put it mildly. There is a support in the center, on which hangs an unlit lantern. At the end opposite the entrance is a table, seemingly designed to fit snug and secure into one of the carts you saw as you were lead through the camp. On the other side of the tent are three humans, each seated on a simple wooden stool. On the left is a [middle-aged man], dressed in worn leather armor. It is obvious that, while he is no great hero, he has seen his fair share of battles. In the center is a young, plain looking woman, dressed in simple commoner's clothing. On the far right stool is seated a [weary-man], obviously past his prime, who has spent a life working hard. Each one looks at you with interest in his or her eyes.", [levelOneWearyMan, levelOneMiddleAgedMan]);


var level2 = new Level(2, "The middle aged man turns to you. 'A’ite lads and lasses. Here's the deal. You are here because you have nowhere else to go in Zeland. We have a problem you can solve. There are one too many undead as of late. They generally wander in from the north, from the Battleplain. None of our men can be spared now, so it’ s up to you. If you wish to join us, we need proof of your worth. Stop the source of the dead, whatever it is. It shouldn't be too hard; the dead are weak, so whatever is making them should be as well. Take this [paper], and go into the wilds.", [levelTwoPaper]);

var level3 = new Level(3, "You grab the paper and agree to the terms. It's time to get ready. The camp is busy with movement. There in the north side of the camp is the [blacksmith]. Your [tent] is next to some [pigs], which will likely soon be slaughtered for meat.")

var level4 = new Level(4, "You approach the blacksmith. He lifts the sword up and says, 'This is a fine blade. Too bad I have to give it back.' You take the sword, sheath it, and now your ready for the [hunt].");

var level5 = new Level(5, "You're a few miles out of the camp. The forest light is dimming, and out across the trees, you hear the echoing sound of orc feet. You pause, looking around. Your heartbeat elevates. This is the fight you've been wanting. The footsteps are approaching quickly. You see them through the trees and position yourself behind one of them. They are nearly there. The [orcs] are nearly right on top of you.")

var level6 = new Level(6, "The battle is fierce, but you vanquish the orcs. You wipe the blood off your blade and proceed to the Battleplain. When you arrive, you see two towers standing on a hill. At the base of the towers, it is immediately obvious that something is indeed abnormal. A large tarp has been put up in between the two Towers of Waiting. Beneath it stand three [skeletons], armed with aging weapons scrounged from the Battleplain. Behind the skeletons are four kobolds, who are fussing over a pile of bones. The towers themselves stand about 100 ft. apart. The tarp is set off center between the two, closer to the right tower than the left by about 15ft.");

var level7 = new Level(7, "You approach the zombies and hold your sword high above your head, swiping at the animated bones. They crumble and their [bones] litter the ground below you. It was a little too easy.")

var level8 = new Level(8, "You pick up one of the bones and feel the energy fill your body. You've absorbed the energy and feel more powerful. Your blade glows. You hear some clattering in the [tower]. It sounds like there might be more of them.")

var level9 = new Level(9, "Light pours in from behind as you pass through the entrance, illuminating this chamber in a dull light. The floor by the entrance has a square depression, as if something was inset in the floor previously. In the center of the room is a massive round hole, taking up the majority of the floor space. It leaves about 10' of walkway around the perimeter of the room. A wooden rail is set around the edge of the hole in a hexagonal shape. Unlit sconces are set upon the top of each corner post of the rail. The side facing the entrance is left open. A long ladder is set on the floor on the opposite side of the room, hanging over the edge of the hole part way. Some planks and a large stone tile are piled up behind the ladder. A set of [stairs] leads upwards along the western wall.");

levelArray.push(level1, level2, level3, level4, level5, level6, level7, level8, level9);
