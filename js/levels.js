var levelArray = [];

var Level = function(lev, desc, obj, enemy){
  this.level = lev;
  this.info = desc;
  this.items = [];
  this.enemies = enemy;

};

var Enemy = function(name, hp){
  this.enemyName = name;
  this.hp = hp;
}

//Enemy Objects
var enemy1 = new Enemy("Fox", 30);
var enemy2 = new Enemy("Campfire Foxes", 40);
var enemy3 = new Enemy("Le Leader", 60);

// Order of commands
// [talk, pickup, go, run, lookat, check]

var Object = function(name, description, talk, pickup, go, fight, inter) {
  this.objectName = name;
  this.check = description;
  this.talk = talk;
  this.pickup = pickup;
  this.go = go;
  this.fight = fight;
  this.interact = inter;
  this.help = "Please target one of the items in [brackets]."
};

//All Objects
//level one
var planet = new Object("planet", "The planet is terrestrial and looks a lot like your old home. You feel a little nostalgic.", "You sing a little love song to the planet.", "You cannot pickup the planet.", "level-up", "You fire your ship's laser at the planet. The laser vanishes once it hits the atmosphere.", "You take a selfie with the planet.");

var radio = new Object("space radio", "Your radio only cost you a couple of space bucks at the local space thrift store. What a deal!", "You sing along with the song on the space radio, just a little out of key.", "The space radio is heavier than it looks.", "You walk towards the space radio, but there is't anything interesting nearby.", "You think breaking your space radio is a bad idea.", "You turn the music up on your space radio.");

//level two
var north = new Object("north", "The pine trees look a little softer than the rocks.", "You yell at the trees for not being a nice little clearing to land in.", "You cannot pickup the trees.", "double-level-up", "You fire lasers, and they burn the tops of the trees, but are otherwise ineffective.", "You take a selfie with the trees, wasting valuable time.");

var south = new Object("south", "The rocks look really jagged and hard. Maybe the trees are a better decision.", "You yell at the rocks for not being a clearing.", "You cannot pickup the rocks.", "level-up", "You shoot lasers at the rocks, and miss.", "You take a selfie with the rocks, wasting valuable time.");

//level three
var levelThreeButton = new Object("switch", "This button will open the cockpit in any emergency", "You tell the button to open the cockpit, but you remember that you forgot to install voice control. Still on the to-do list...", "You try to pickup the button, but it's difficult and it doesn't work.", "You're already next to the button", "You try to smash the button, but you miss.", "double-level-up");

var bunk = new Object("bunk", "Your bed is a little lumpy, but the blankets are old and familiar, smelling a little like home.", "You tell your stuffed carrot that you love them.", "You try to pick up the bunk but it is bolted to the deck.", "You go to your bed to lie down but its not as comfortable as it looks.", "You throw all the blankets off the bed and onto the floor.", "You try to take a nap but the sense of adventure makes you restless.");

// level four
var levelFourButton = new Object("button", "This button will open the cockpit in any emergency.", "You tell the button to open the cockpit, but you remember that you forgot to install voice control. Still on the to-do list...", "You try to pickup the button, but it's difficult and it doesn't work.", "You're already next to the button.", "You try to smash the button, but you miss.", "level-up");

var carrots = new Object("carrots", "Your carrots look a little beat up from the crash but still edible.", "You tell your carrots how sorry you are that they got beat up.", "You pick up your carrots and put them in your pocket.", "You walk towards your carrots and accidentally step on them.", "You throw your carrots at the wall and break them.", "add-to-inventory");

// level five
var turnip = new Object ("turnip", "The turnip is about a foot tall and a foot wide. The stalks on its head are styled into a very fashionable 'hair-do'. Its torso is a lovely shade of purple.", "The turnip asks again for your help." , "The turnip is indignant that you picked it up. This is wildly offensive in turnip culture.", "Don't move! There is a fox with a laser pointed at you.", "The turnip bites your foot and insists the fox is the bad guy.", "The turnip asks for your help again!");


var fox = new Object("fox", "The fox is wearing the FiSSwL (Foxes in Spacesuits with Lasers) patch. The foxe's ears are poking out of the top of the space suit.", "You tell the fox that maybe it should 'freeze' instead. It scroffs at the request.", "You don't want to try to pick him up, since he has a laser pointed at you.", "You don't want to move when he has a laser pistol pointed at you.", "fight1", "You take a selfie with the enemy fox. The turnips are horrified.");

var foxes = new Object("the foxes", "They seem to be talking about something your can't quite hear from here.", "You can't talk to them from here, it would blow your cover!", "You cannot pickup these foxes.", "double-level-up", "double-level-up", "You take a selfie with the foxes, wasting valuable time.");


// level six
var forest = new Object("forest", "The forest is dense with trees.", "You whistle and it sounds like the forest whistles back.", "You pickup a stick from the ground and throw it deep into the forest.", "level-up", "You punch a tree and hurt your paw!", "You take a selfie with the forest, wasting valuable time.");

// level seven
var quietly = new Object("sneak quietly", "You could sneak quietly if you decide to 'go' quietly.", "You whisper to yourself about how sad it is that the foxes are eating turnips.", "You cannot pickup abstract things.", "level-up", "You punch the air as a warm up.", "You take a selfie, quietly, with the camp behind you, wasting valuable time.");

var foxes = new Object("fight the foxes", "They seem to be talking about something your can't quite hear from here.", "You can't talk to them from here, it would blow your cover!", "You cannot pickup these foxes.", "double-level-up", "double-level-up", "You take a selfie with the foxes, wasting valuable time.");

// level eight
var tree = new Object ("tree", "The tree is very slippery and tall. It looks like the lowest branches are out of your reach.", "The tree has nothing to say.", "You are strong, but not THAT strong!", "You go to the tree, but it is too slippery to climb.", "You have other enemies to think about right now!", "You try to climb the tree, but it is too slippery to climb.");

var levelEightRock = new Object ("large rock", "The rock is a bit shorter than you and very wide, perfect for crouching behind in a laser gun fight.", "The rock suggests you stop talking to rocks.", "The rock kindly asks you to put it down before you hurt yourself. It is very heavy.", "double-level-up", "You have other enemies to think about right now.", "You ask the rock if it is on Linked-In and if it will add you as a network.");

// level nine
var stick = new Object ("stick", "The stick is inches from your paw, and looks a little brittle.", "The stick doesn't have much to say to you.", "You pick up the stick, but it breaks easily in your paw.", "You are already very close to the stick.", "You cannot do that right now.", "You pick up the stick, but it breaks easily in your hands.");

var levelNineLaserGun = new Object ("laser gun", "Your trusty laser gun, The Unforgettable, is quite a way behind you, but you might be able to reach it in time.", "You call out to your last gun, but it doesn't respond.", "level-up", "level-up", "Your stick broke and your gun is still behind you!", "level-up");

// level ten
var levelTenRock = new Object ("sharp rocks", "The rocks are in a small pile nearby, and they look very sharp.", "You ask the rocks to cut your ropes, but they do not respond.", "You can't pick up the rocks when you are tied up!", "You try to wiggle your way towards the rocks, but find it too difficult.", "You cannot do this right now.", "You try to wiggle your way towards the rocks, but find it too difficult.");

var rope = new Object("rope", "The rope is thick, but its no match for your sharp teeth.", "The rope does not talk.", "You cannont pick up the rope because it is wrapped around you.", "You cannot go anywhere.", "You wriggle fiercly, but the rope does not give.", "level-up");

// level eleven
var microphone = new Object("microphone", "The microphone is attached to a long cord. It is very similar to a lasso or a ball and chain.", "Your voice is magnified to the crowd and startles you.", "level-up", "You go towards the microphone and knock it off the stand", "You hit the microphone and knock it off the stand", "You take a selfie with the crowd of Foxes");

var boilingWater = new Object("boiling water", "The pot of boiling water is large and black, there is steam rising from the top. It looks like it could badly burn your enemies.", "You tell the babies hanging above that you are there to rescue them.", "You try to pick up the pot but its too large and the hot water starts to overflow almost burning you.", "You walk towards the boiling water but the steam makes it hard to see.", "You attack the pot of boiling water and it almost spills all over you!", "You reach towards the pot of boiling water and it almost spills all over you!");

var leader = new Object("Le Leader du Les Foxes", "Le Leader du Les Foxes is wearing his beret proudly.", "You taunt him with bunny puns.", "You can't pick him up at the moment.", "You're already pretty close.", "fight3", "You try to take a selfie with Le Leader du Les Foxes, but he stops you before you waste valuable time.");

// level twelve
var zipper = new Object("zipper", "The zipper pull is hanging right below Le Leader's beret. The zipper spans the length of the space suit.", "Zippers cant talk you fool!", "What are you trying to do?", "level-up", "level-up", "level-up");

var outside = new Object("outside", "Behind Le Leader du les Foxes is a clear path towards the forest, and behind you is a crowd of foxes.", "You won't be able to talk your way out of this situation!", "There is nothing in the area that might help you escape.", "You try to run, but a group of foxes block your path.", "You try fighting your way through, but there are too many foxes!", "You try running, but a group of foxes block your path. You take a selfie with them wasting valuable time!");

// level thirteen
var foxJail = new Object("fox jail", "Fox jail is a prison established 300 years ago by the founders of Fox City. The crime rate in Fox City is quite low, so it is not highly populated. However, the leaders of Fox City ensure the best guards patrol the prison.", "level-up", "You cannot lift a giant prison. What are you trying to do?", "You need to return the baby turnips to their parents!", "The foxes are no longer the bad guys.", "level-up");

var pot = new Object("pot", "The foxes don't look very hungry.", "You suggest they make turnip soup with Le Leader, but the foxes didn't find turnips appetizing to begin with.", "What are you trying to do?", "It's rude to invite yourself to someone else's meal.", "The foxes are now your friends", "The foxes don't look very hungry.");


var ship = new Object("ship", "The brand new ship modifications make it shine just like an KaratX90T!", "You pat your new ship and say, 'Good Karat...'", "You cannot lift your ship!", "game-end", "You don't want to fight this brand new ship.", "game-end");


//All Levels
var level1 = new Level(1, "You are Riley, Space Rabbit Extraodinaire, exploring new and old worlds in the farthest reaches of space. Your ship, a KaratX70T, is an old version, but trusty, and quite frankly, smells pretty dang good. <br>One lazy space afternon, you leisurely munch on a carrot while you listen to the newest hit space pop song on your <span class='text-object'>[space radio]</span>. <br>Suddenly, the ship's console begins to blink. A distress beacon! <br>'Anyone, please help! We are in trouble. We are being attacked! Our little ones! They are taking them!' <br>The message quickly turns to static. Your computer tells you the message is coming from the <span class='text-object'>[planet]</span> below. <br>Will you respond to the message, or ignore the cries and continue listening to that catchy new jam?");


var level2 = new Level(2, "Your sense of adventure drives you to answer the call for help! You change course to the planet. Upon entering the atmosphere, you begin to feel turbulence. Something doesn't feel right! An error message displays on your control console. The engines are losing power! Your ship plummets towards the planet below. You press the 'Glide' button above your head, and the KaratX70T tries to slow its descent. You search the land below but there are no clearings to safely land in. To the <span class='text-object'>[north]</span>, there is a dense forest. To the <span class='text-object'>[south]</span>, you see what looks to be sharp, jagged rocks.");

var level3 = new Level(3,"You crash into the rocks with a bang. You wake with a headache and your ears are aching. All you remember is a loud bang and everything going black. There are sparks coming from your computer and it smells a lot like burning fur. There is an emergency <span class='text-object'>[switch]</span> to open the cockpit. It's hard to see out your window, but you make out a few moving shadows amongst the typical shadows of forest trees. Those shadows don't look good, but your <span class='text-object'>[bunk]</span> is still intact and a restorative nap sounds good right about now.");


//Choice of North
var level4 = new Level(4, "You head north and crash into the forest below. You wake with a headache and your ears are bruised. There are sparks shooting from your computer, and the smell of burning fur and melted plastic fills your little nose. There is an emergency <span class='text-object'>[button]</span> to open the cockpit. It's hard to see out your window, but you make out a few moving shadows. You also make out some <span class='text-object'>[carrots]</span> on the deck floor that still look edible, and a snack sounds good right about now.");

var level5 = new Level(5, "Riley, Space Rabbit Extraordinaire, doesn't turn away from an adventure! You climb out of the cockpit and plant your paws firmly on the ground. Right in front of you is a living, breathing <span class='text-object'>[turnip]</span>. 'It's alive!' the turnip says. Behind it a dozen more turnips cheer, including a few really small ones. They all have eyes, and seems to have styled the foliage coming out of their heads in a variety of different 'hair' styles. 'Have you come to save us?' You say, 'Well, I answered a beacon, was it yours?' The turnip nods its strange head. 'Our people have recently been preyed upon by the evil Foxes in Space Suits with Lasers. They are taking our young and using them for soup! We will gladly fix your ship in return for your help.' Just as the turnip finishes his sentence, there is a rustling in the bushes. A <span class='text-enemy'>[fox]</span> jumps out of the bushes. 'Freeze!' it says. It's dressed in a space suit, with a patch on its sleeve that reads 'Foxes in Space Suits with Lasers.' He's carrying a laser pistol and has it pointed at you. Who can you trust?");

var level6 = new Level(6, "You swing your paws at the fox and knock its laser gun to the ground. Oh, yeah! You ALSO have a laser gun, with a winning streak in Western Film Trivia! You reach for your trusty laser, The Unforgettable. The fox freezes. 'So you're one of those foxes I've heard of terrorizing these poor turnips,' you say. The fox replies, 'You don't know what you're getting yourself into, buddy. Le Leader du Les Foxes is the coolest, baddest fox in town!' Suddenly, another fox from the FiSSwL jumps out of the bushes and grabs one of the baby turnips. You point The Unforgettable at the fox. However, you are still dizzy from your crash landing, and both foxes vanish into the <span class='text-object'>[forest]</span>.");

var level7 = new Level(7, "You dash into the forest, hopping as fast as you can, following the sound of the crying baby turnip. As you catch up, you hear what sounds like a large camp ahead of you. You slow down and approach quietly. Hiding behind some bushes, you spy on the camp. There are FiSSwL everywhere, and you watch the baby turnip being carried into the camp. There sit a group of Foxes in Space Suits with Lasers around a fire, chatting. You can either infiltrate the camp <span class='text-object'>[quietly]</span>, or run in to fight the <span class='text-object'>[foxes]</span> openly.");

var level8 = new Level(8, "You sneak closer to the foxes' campfire to hear what they are saying. The FiSSwL are discussing their plans to gather with their Leader, Le Leader du Les Foxes, for the feast of baby turnip soup. The meeting is this afternoon, and very close-by. As you creep closer to the group, you wince as a sharp CRACK is heard from beneath your fuzzy toes. Uh-oh! You've stepped on a twig, and the Foxes in Space Suits with Lasers quickly turn their heads towards the sound. You need to think quickly! You notice nearby a tall <span class='text-object'>[tree]</span> you might be able to climb, (though it looks very slippery), and a <span class='text-object'>[large rock]</span> you could use to sheild yourself as you shoot the foxes.");

var level9 = new Level(9, "You're close enough to hear the foxes' nefarious plans to meet that afternoon to begin the feast. Your sense of has justice inflamed! You rush towards the Foxes in Space Suits with Laser's campfire. The meeting is soon, and very close-by, and you can't waste time sneaking around. You're the Space Rabbit Extraordinaire, and the bad guys need to be taught a lesson! You charge towards the campfire with a blood curdling squeak. You see a <span class='text-object'>[stick]</span> within reach you could easily use as a weapon. Oh, right! Nearly too late, but maybe in time, you realize you've left your <span class='text-object'>[laser gun]</span>, the Unforgettable, a few yards behind you next to a large rock.");

var level10 = new Level(10, "Using the large rock to shield you, you reach for your trusty laser gun, the Unforgettable. Before your little paws can grasp the handle, you are swiftly lifted by the ears and a rope is tied around you. The humility of looking like an old Bugs Bunny cartoon is not lost on you, and you struggle to break free. Confident you aren't going anywhere, the foxes leave with the crying baby turnip in tow. Little did they know, you are Riley, Space Rabbit Extraordinaire, and there's not an explorer in the universe who can match your skills in escape. Nearby, you notice some <span class='text-object'>[sharp rocks]</span> just within reach. In your arsenal of jailbreak tools, you have your Krav Maga training, utlizing your sharp bunny teeth and cute wriggling on the <span class='text-object'>[rope]</span>. Hurry! You need to get out in time to crash that meeting!");

var level11 = new Level(11, "You're not known as Riley, Space Rabbit Extraordinaire, for nothing! Using your teeth to escape easily, you happen to notice a conveniently left behind regulation FiSSwL space suit in your size, even accomodating your luxurious rabbit coat. Swiftly, you jump into the costume and hop with haste to the meeting place. Once you reach the Foxes with Space Suits and Lasers' gathering, you make your way to the front of the crowd listening to Le Leader du les Foxes recite the recipe. 'First, bring ze water to ze boiling, zhen add ze salt and ze pepper.' There is a pot of boiling water with the baby turnips hanging above. Placing yourself between the babies and the head honcho, you challenge the fox to a fight. This time remembering your trusty laster, the Unforgettable, you realize, too late, that your weapon is still with the Foxes in Space Suits with Lasers who captured you. Available to use as weapons nearby are the <span class='text-object'>[microphone]</span> and the <span class='text-object'>[boiling water]</span> for the soup");

var level12 = new Level(12, "Recalling your training in the art of Wushu, you flail the microphone like a ball and chain above your ears. It's time to take on the Le <span class='text-enemy'>[Leader]</span> du Les Foxes.");

var level13 = new Level(13, "Le Leader du Les Foxes, ducks with a twirl and tries to kick your feet from under you. As they spin, you notice a <span class='text-object'>[zipper]</span> at the crown of their space helmet. You are also surrounded by more foxes than you can handle, and wonder if you should flee <span class='text-object'>[outside]</span> to regroup and fight the boss one-on-one another time.")

var level14 = new Level(14, "You, Riley, Space Rabbit Extraordinaire, use your powerful legs to jump behind Le Leader and tug the zipper down. Deflating, the space suit sinks to the legs of a--What is this? A turnip! A gasp resonates through the crowd. Confused, the foxes begin to disperse, muttering among themselves, 'we didn't even like turnips anyway' and 'we were only doing it because that guy said it was cool.' A few foxes, embarassed by the whole ordeal, hand you your trusty laser gun, the Unforgettable, (which you've totally forgotten about), ask you what they should do with the treachorous ex-leader of the FiSSwL. You have a couple ideas in mind. They could lock the turnip up in <span class='text-object'>[fox jail]</span>, they could cook him for dinner in the <span class='text-object'>[pot]</span> of boiling water.");


var level15 = new Level(15, "Carrying the rescued turnip babies, you make your way back to the turnip town. By now, the turnips have finished repairing your ship, and what was once a KaratX70T now sparkles like a KaratX90T. The foxes are gone, Le Leader is behind bars, the babies are back with their families, and you've got a sweet new ride. All-in-all, you'd call this adventure a successful one. It's time to say goodbye and take off in your <span class='text-object'>[ship]</span>, tucking the Unforgettable in its holster onto the co-pilot's seat.");


levelArray.push(level1, level2, level3, level4, level5, level6, level7, level8, level9, level10, level11, level12, level13, level14, level15);
