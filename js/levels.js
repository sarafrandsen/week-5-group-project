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

var Object = function(name, description, talk, pickup, go, run, fight, interact) {
  this.objectName = name;
  this.check = description;
  this.talk = talk;
  this.pickup = pickup;
  this.go = go;
  this.run = run;
  this.fight = fight;
  this.interact = interact;
  this.help = "Please target one of the items in [brackets]."
};

//All Objects
var planet = new Object("planet", "The planet is terrestrial and looks a lot like your old home. You feel a little nostalgic.", "You sing a little love song to the planet.", "You cannot pickup at this time.", "level-up", "You're strapped in to your captain's chair and therefore running is impossible.", "You fire your ships laser at the planet. The laser vanishes once it hits the atmosphere.", "You take a selfie with the planet.");

var north = new Object("north", "The pine trees look a little softer than the rocks", "You yell at the trees for not being a nice little clearing to land in", "You cannot pickup the trees", "double-level-up", "You're strapped in!", "You fire lasers, and it burns the tops of the trees, but is otherwise ineffective", "You take a selfie with the trees, wasting valuable time.");

var south = new Object("south", "The rocks look really jagged and hard. Maybe the trees are a better decision", "You yell at the rocks for not being a clearing.", "You cannot pickup the rocks.", "level-up", "You're strapped in!", "You shoot lasers at the rocks, and miss.", "You take a selfie with the rocks, wasting valuable time.");

var level3Button = new Object("button", "This button will open the cockpit in any emergency", "You tell the button to open the cockpit, but you remember that you forgot to install voice control. Still on the to-do list...", "You try to pickup the button, but it's difficult and it doesn't work.", "You're already next to the button", "You're strapped in.", "You try to smash the button, but you miss.", "double-level-up");

var level4Button = new Object("button", "This button will open the cockpit in any emergency", "You tell the button to open the cockpit, but you remember that you forgot to install voice control. Still on the to-do list...", "You try to pickup the button, but it's difficult and it doesn't work.", "You're already next to the button", "You're strapped in.", "You try to smash the button, but you miss.", "level-up");


var fox = new Object("fox", "The fox is wearing the FSSL (Foxes in Spacesuits with Lasers) patch. The space suit's face shield is opaque and you cannot see inside. The foxe's ears are poking out of the top of the space suit.", "You tell the fox that maybe it should 'freeze' instead. It scroffs at the request.", "You don't want to try to pick him up, since he has a laser pointed at you.", "You don't want to move when he has a laser pistol pointed at you.", "You cannot run right now", "level-up", "You take a selfie with the enemy fox. The turnips are horrified.");

var forest = new Object("forest", "The forest is dense with trees", "You whistle and it sounds like the forest whistles back.", "You pickup a stick from the ground and throw it deep into the forest.", "level-up", "level-up", "You punch a tree and hurt your paw!", "You take a selfie with the forest, wasting valuable time.");

var quietly = new Object("sneak quietly", "You could sneak quietly if you decide to 'go' quietly", "You whisper to yourself about how sad it is that the foxes are eating turnips.", "You cannot pickup abstract things", "level-up", "Running quietly would be pretty difficult at the moment.", "You punch the air as a warm up.", "You take a selfie, quietly, with the camp behind you, wasting valuable time.");

var foxes = new Object("fight the foxes", "They seem to be talking about something your can't quite hear from here.", "You can't talk to them from here, it would blow your cover!", "You cannot pickup these foxes.", "double-level-up", "double-level-up", "You take a selfie with the foxes, wasting valuable time.")



//All Levels
var level1 = new Level(1, "You are Riley, space rabbit extraodinaire, exploring new and old worlds in the farthest reaches of space. Your ship, a KaratX70T, is an old version, but trusty, and quite frankly, smells pretty dang good. Out of your window, you see a terrestrial planet, one you have never visited. You're munching on a carrot when your console begins to blink. A distress beacon! You press the play button and listen. 'Anyone, please help! We are in trouble. We are being attacked! Our little ones! They are taking them!' The message quickly turns to static. Your computer tells you the message is coming from the [planet] below.");


var level2 = new Level(2, "You change course toward the planet. Upon entering the atmosphere, you begin to feel turbulence. This isn't normal. An error message begins to display on your computer's output screen. The engines are losing power drastically! There must be something with the atmosphere here. Something terrible. Your engines begin to completely fail and the ship starts to drop. You press the 'Glide' button above your head and the KaratX70T sprouts long gliding wings. The forest below is dense and there are no clearings to crash land in. To the [north] there are dense pines, and to the [south] you see what looks to be sharp, jagged rocks.");

//Choice of South
var level3 = new Level(3,"You crash into the rocks and the ride is extremely painful. All you remember is a loud bang and everything going black. You wake with a headache and your ears and arching. There are sparks coming from your computer and it smells a lot like burnt hair. There is an emergency [button] to open the cockpit. It's hard to see out your window, but your make our a few moving shadows, among the shadows of the forest trees.")

//Choice of North
var level4 = new Level(4, "You crash into the forest below. All you remember is the smashing of branches and a loud cracking sound. You wake with a headache and your ears are aching. There are sparks coming from your computer and it smells a little like burnt hair. There is an emergency [button] to open the cockpit. It's hard to see out your window, but you make out a few moving shadows.")

var level5 = new Level(5, "You climb out of the cockpit and plant your paws firmly on the ground. Right in front of you is a living, breathing turnip. 'It's alive!' it says. Behind it a dozen more turnips cheer, including a few really small ones. They all have eyes, and seems to have styled the foliage coming out of their heads in a variety of different 'hair' styles. 'Have you come to save us?' You say, 'Well, I did the get beacon.' The turnip seems pleased. 'Our people have been preyed on by the evil Foxes in Space Suits with Lasers. They are taking our young and using them for soup! We will gladly fix your ship in return for your help.' Just as the turnip finishes his sentence, there is a rustling in the bushes. A [fox] jumps out of the bushes. 'Freeze!' it says. It's dressed in a space suit, with a patch on its sleeve that reads 'Foxes in Space Suits with Lasers.' He's carrying a laser pistol and has it pointed at you. This must be the enemy.");

var level6 = new Level(6, "You attack the fox and knock its laser gun to the ground. Oh, yeah! You have a laser too! You reach for your trusty laser gun, The Unforgettable. The fox freezes. You say, 'So you're the fox terrorizing these poor turnips.' The fox replies, 'You don't know what you're getting yourself into, buddy.' Just then, another fox from FSSL jumps out of the bushes and grabs one of the baby turnips. You points The Unforgettable at the fox, but cannot get a clear shot. Distracted, you lose track of the first fox as well, and both vanish into the [forest].")

var level7 = new Level(7, "You dash into the forest, hopping as fast as you can. You can hear the baby turnip yelling for help and follow the sound. As you begin to catch up, you can hear what sounds like a large camp in the distance. You slow down and approach quietly. You hide behind some bushes and look into the camp. There are FSSL foxes everywhere and you can see the baby turnip being carried into the camp. There is a group of Foxes in Space Suits with Lasers surrounding a fire and chatting. You can either infiltrate the camp [quietly], or run in and fight the [foxes] openly.");


levelArray.push(level1, level2, level3, level4, level5, level6, level7, level8, level9);
