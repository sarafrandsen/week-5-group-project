
var Level = function(lev, desc, obj, enemy){
  this.level = lev;
  this.info = desc;
  this.items = [];
  this.enemies = enemy;

};

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
var level8 = new Level(8, "You sneak closer to the foxes' campfire to hear what they are saying. The FiSSwL are discussing their plans to gather with their Leader, Le Leader du Les Foxes, for the feast of baby turnip soup. The meeting is this afternoon, and very close-by. As you creep closer to the group, you wince as a sharp CRACK is heard from beneath your fuzzy toes. Uh-oh! You've stepped on a twig, and the Foxes in Space Suits with Lasers quickly turn their heads towards the sound. You need to think quickly! You notice nearby a tall [tree] you might be able to climb, (though it looks very slippery), and a [large rock] you could use to sheild yourself as you shoot the foxes."

var level9 = new Level(9, "You're close enough to hear the foxes' nefarious plans to meet that afternoon to begin the feast. Your sense of has justice inflamed! You rush towards the Foxes in Space Suits with Laser's campfire. The meeting is soon, and very close-by, and you can't waste time sneaking around. You're the Space Rabbit Extraordinaire, and the bad guys need to be taught a lesson! You charge towards the campfire with a blood curdling squeak. You see a [rock] and a [stick] near by which you could easily use as weapons, and you even consider trying to [ram] the full force of your little, squishy body into the nearest fox. Oh, right! Nearly too late, but maybe in time, you realize you've left your [laser gun], the Unforgettable, a few yards behind you."

var level10 = new Level(10, "You reach for your trusty laser gun, the Unforgettable. Before your little paws can grasp the handle, you are swiftly lifted by the ears and a rope is tied around you. The humility of looking like an old Bugs Bunny cartoon is not lost on you, and you struggle to break free. Confident you aren't going anywhere, the foxes leave with the crying baby turnip in tow. Little did they know, you are Riley, Space Rabbit Extraordinaire, and there's not an explorer in the universe who can match your skills in escape. Nearby, you notice some [sharp rocks] just within reach. In your arsenal of jailbreak tools, you also have your sharp bunny [teeth], and basic skills in Krav Maga [wiggling]. Hurry! You need to get out in time to crash that meeting!")

var level11 = new Level(11, "You're not known as Riley, Space Rabbit Extraordinaire, for nothing! Escaping easily, you happen to notice a conveniently left behind regulation FiSSwL space suit in your size, even accomodating your luxurious rabbit coat. Swiftly, you jump into the costume and hop with haste to the meeting place. Once you reach the Foxes with Space Suits and Lasers' gathering, you make your way to the front of the crowd listening to the leader recite the recipe. 'First, bring ze water to ze boiling, zhen add ze salt and ze pepper.' There is a pot of boiling water with the baby turnips hanging above. Placing yourself between the babies and the head honcho, you challenge the fox to a fight. This time remembering your trusty laster, the Unforgettable, you realize, too late, that your weapon is still with the Foxes in Space Suits with Lasers who captured you. Available to use as weapons nearby is the [microphone], the [boiling water] for the soup, and your [paws].")

var level12 = new Level(12, "Recalling your training in the art of Wushu, you flail the microphone like a ball and chain above your ears. Throwing it towards Le Leader du Les Foxes, the boss ducks with a twirl and tries to kick your feet from under you. As they spin, you notice a [zipper] at the crown of their space helmet. You are also surrounded by more foxes than you can handle, and wonder if you should [flee] to regroup and fight the boss one-on-one another time.")

var level13 = new Level(13, "You, Riley, Space Rabbit Extraordinaire, use your powerful legs to jump behind Le Leader and tug the zipper down. Deflating, the space suit sinks to the legs of a--What is this? A turnip! A gasp resonates through the crowd. Confused, the foxes begin to disperse, muttering among themselves, 'we didn't even like turnips anyway' and 'we were only doing it because they guy said it was cool.' A few foxes, embarassed by the whole ordeal, hand you your trusty laser gun, the Unforgettable, (which you've totally forgotten about), ask you what they should do with the treachorous ex-leader of the FiSSwL. You have a couple ideas in mind. They could lock the turnip up in [fox jail], they could save him for [dinner], or they could set him [free].")

var level14 = new Level(14, "Carrying the rescued turnip babies, you make your way back to the turnip town. By now, the turnips have finished repairing your ship, and what was once a KaratX70T now sparkles like a KaratX90T. The foxes are gone, Le Leader is behind bars, the babies are back with their families, and you've got a sweet new ride. All-in-all, you'd call this adventure a successful one. Bidding your new friends farewell, you take off in your ship, tucking the Unforgettable in its holster onto the co-pilot's seat. Safe travels, Riley, Space Rabbit Extraordinaire!")
