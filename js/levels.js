var levelArray = [];

var Level = function(lev, desc, obj, enemy){
  this.level = lev;
  this.info = desc;
  this.items = obj;
  this.enemies = enemy;

};

// Order of commands
// [talk, pickup, go, run, lookat]

var Object = function(name, description, talk, pickup, go, run, change) {
  this.objectName = name;
  this.check = description;
  this.talk = talk;
  this.pickup = pickup;
  this.go = go;
  this.run = run;
  this.help = "Please target one of the items in [brackets]."
};


var levelOneWearyMan = new Object("weary-man", "The man has rough hands and deep set eyes. He's worked hard for too long. There is a long scar across his forearm. It looks like it was from a sword.", "He does not want to talk to you.", "You try to pick him up, but he pulls a knife on you and you stop", "You go to him, but he shoos you away", "You run from the man, and he doesn't even notice. What are you doing??")


var levelOneMiddleAgedMan = new Object("middle-aged man", "He looks like he has something to say.", true, "You can't do that", "You walk over to the man, and he begins to speak", "You don't have a reason to run");


var level1 = new Level(1, "The decor in the tent is spartan, to put it mildly. There is a support in the center, on which hangs an unlit lantern. At the end opposite the entrance is a table, seemingly designed to fit snug and secure into one of the carts you saw as you were lead through the camp. On the other side of the tent are three humans, each seated on a simple wooden stool. On the left is a [middle-aged man], dressed in worn leather armor. It is obvious that, while he is no great hero, he has seen his fair share of battles. In the center is a young, plain looking woman, dressed in simple commoner's clothing. On the far right stool is seated a [weary-man], obviously past his prime, who has spent a life working hard. Each one looks at you with interest in his or her eyes.", [levelOneWearyMan, levelOneMiddleAgedMan]);

var level2 = new Level(2, "'A’ite lads and lasses. Here's the deal. You are here because you have nowhere else to go in Zeland. We have a problem you can solve. There are one too many undead as of late. They generally wander in from the north, from the Battleplain. None of our men can be spared now, so it’ s up to you. If you wish to join us, we need proof of your worth. Stop the source of the dead, whatever it is. It shouldn't be too hard; the dead are weak, so whatever is making them should be as well. Will you help? [Yes] or [no]?'")

levelArray.push(level1, level2);
