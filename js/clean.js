
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
var level8 = new Level(8, "You sneak closer to the Foxes' campfire to hear what they are saying. The FiSSwL are discussing the next meeting to discuss with their Secret Leader regarding the cooking and stewing of Turnip babies. The meeting is soon, and very close-by. As you creep closer to the group, you wince as a sharp CRACK is heard from beneath your fuzzy toes. Uh-oh! You've stepped on a twig, and the Foxes in Space Suits with Lasers quickly turn their heads towards the sound. You need to think quickly! You notice nearby a tall [tree] you might be able to climb, (though it looks very slippery), and a [large rock] you could use to sheild yourself as you shoot the Foxes."

var level9 = new Level(9, "Your sense of has justice inflamed! You rush towards the Foxes in Space Suits with Laser's campfire. The meeting is soon, and very close-by, and you can't waste time sneaking around. You're the Space Rabbit Extraordinaire, and the bad guys need to be taught a lesson! You charge towards the campfire with a blood curdling squeak. You see a [rock] and a [stick] near by which you could easily use as weapons, and you even consider trying to [ram] the full force of your little, squishy body into the nearest fox. Oh, right! Nearly too late, but maybe in time, you realize you've left your [laser], the Unforgettable, a few yards behind you."

var level10 = new Level(10, "You reach for your trusty laser, the Unforgettable. Before your little paws can grasp the handle, you are swiftly lifted by the ears and a rope is tied around you. The humility of looking like an old Bugs Bunny cartoon is not lost on you, and you struggle to break free. Little did they know, you are Riley, Space Rabbit Extraordinaire, and there's not an explorer in the universe who can match your skills in escape. Nearby, you notice some [sharp rocks] just within reach. In your arsenal of jailbreak tools, you also have your sharp bunny [teeth], and basic skills in Krav Maga [wiggling]. Hurry! You need to get out in time to crash that meeting!")

var level11 = new Level(11, "You're not known as Riley, Space Rabbit Extraordinaire, for nothing! Escaping easily, you happen to notice a conveniently left behind regulation FiSSwL space suit in your size, even accomodating your luxurious rabbit coat. Swiftly, you jump into the costume and hop with haste to the meeting place. Once you reach the Foxes with Space Suits and Lasers' gathering, you make your way to the front of the crowd listening to the leader recite the recipe. 'First, bring ze water to ze boiling, zhen add ze salt and ze pepper.' There is a pot of boiling water with the baby turnips hanging above. Placing yourself between the babies and the head honcho, you challenge the fox to a fight. This time remembering your trusty laster, the Unforgettable, you realize, too late, that your weapon is still with the Foxes in Space Suits with Lasers who captured you. Available to use as weapons nearby is the [microphone], the [boiling water] for the soup, and your [paws].")

var level12 = new Level(12, "Recalling your training in the art of Wushu, you flail the microphone like a ball and chain above your ears. Throwing it towards Le Leader du Les Foxes, the boss ducks with a twirl and tries to kick your feet from under you. As they spin, you notice a [zipper] at the crown of their space helmet. You also notice that ")

var level13 = new Level(13, "You, Riley, Space Rabbit Extraordinaire, use your powerful legs to jump behind Le Leader and tug the zipper down. Deflating, the space suit sinks to the legs of a--What is this? A Turnip!")
