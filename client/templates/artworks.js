Router.route('/art', function () {
  this.render('art');
});

Template.art.helpers({
  planarmonsters: function() {
  	//console.log('looking for monsters');
    return Monsters.planar();
  }
});

Template.art.events({
   'click .monstername': function(e) {
    	//console.log('setting name = '+this.name);   
      Session.set("selectedMonster", this.name);
      Session.set("fighting", false);
      Session.set("monsterSetting", "planar");
      Session.set("fighting", true);    //////////////////////////////// in here for testing
      Session.set("playerhealth",100);
   }
});

Router.route('/bbqs', function () {
  this.render('bbqs');
});

Template.bbqs.helpers({
  undeadmonsters: function() {
  	//console.log('looking for monsters');
    return Monsters.undead();
  }
});

Template.bbqs.events({
   'click .monstername': function(e) {
    	//console.log('setting name = '+this.name);   
      Session.set("selectedMonster", this.name);
      Session.set("fighting", false);
      Session.set("monsterSetting", "bbqs");
      Session.set("fighting", true);    //////////////////////////////// in here for testing
      Session.set("playerhealth",100);
   }
});

Router.route('/pits', function () {
  this.render('pits');
});

Template.pits.helpers({
  swampmonsters: function() {
  	//console.log('looking for monsters');
    return Monsters.swamp();
  }
});

Template.pits.events({
   'click .monstername': function(e) {
    	//console.log('setting name = '+this.name);   
      Session.set("selectedMonster", this.name);
      Session.set("fighting", false);
      Session.set("monsterSetting", "pits");
      Session.set("fighting", true);    //////////////////////////////// in here for testing
      Session.set("playerhealth",100);
   }
});

Router.route('/nodes', function () {
  this.render('nodes');
});

Template.nodes.helpers({
  cavernmonsters: function() {
  	//console.log('looking for monsters');
    return Monsters.cavern();
  }
});

Template.nodes.events({
   'click .monstername': function(e) {
    	//console.log('setting name = '+this.name);   
      Session.set("selectedMonster", this.name);
      Session.set("fighting", false);
      Session.set("monsterSetting", "nodes");
      Session.set("fighting", true);    //////////////////////////////// in here for testing
      Session.set("playerhealth",100);
   }
});

Router.route('/bins', function () {
  this.render('bins');
});

Template.bins.helpers({
  binmonsters: function() {
  	//console.log('looking for monsters');
    return Monsters.bin();
  }
});

Template.bins.events({
   'click .monstername': function(e) {
    	//console.log('setting name = '+this.name);   
      Session.set("selectedMonster", this.name);
      Session.set("fighting", false);
      Session.set("monsterSetting", "bins");
      Session.set("fighting", true);    //////////////////////////////// in here for testing
      Session.set("playerhealth",100);
   }
});

Router.route('/parks', function () {
  this.render('parks');
});

Template.parks.helpers({
  realmmonsters: function() {
  	//console.log('looking for monsters');
    return Monsters.realm();
  }
});

Template.parks.events({
   'click .monstername': function(e) {
    	//console.log('setting name = '+this.name);   
      Session.set("selectedMonster", this.name);
      Session.set("fighting", false);
      Session.set("monsterSetting", "parks");
      Session.set("fighting", true);    //////////////////////////////// in here for testing
      Session.set("playerhealth",100);
   }
});

Router.route('/playgrounds', function () {
  this.render('playgrounds');
});

Template.playgrounds.helpers({
  depthmonsters: function() {
  	//console.log('looking for monsters');
    return Monsters.depth();
  }
});

Template.playgrounds.events({
   'click .monstername': function(e) {
    	//console.log('setting name = '+this.name);   
      Session.set("selectedMonster", this.name);
      Session.set("fighting", false);
      Session.set("monsterSetting", "playgrounds");
      Session.set("fighting", true);    //////////////////////////////// in here for testing
      Session.set("playerhealth",100);
   }
});

Router.route('/trees', function () {
  this.render('trees');
});

Template.trees.helpers({
  woodsmonsters: function() {
  	//console.log('looking for monsters');
    return Monsters.woods();
  }
});

Template.trees.events({
   'click .monstername': function(e) {
    	//console.log('setting name = '+this.name);   
      Session.set("selectedMonster", this.name);
      Session.set("fighting", false);
      Session.set("monsterSetting", "trees");
      Session.set("fighting", true);    //////////////////////////////// in here for testing
      Session.set("playerhealth",100);
   }
});

Router.route('/toilets', function () {
  this.render('toilets');
});

Template.toilets.helpers({
  toiletmonsters: function() {
  	//console.log('looking for monsters');
    return Monsters.toilets();
  }
});

Template.toilets.events({
   'click .monstername': function(e) {
    	//console.log('setting name = '+this.name);   
      Session.set("selectedMonster", this.name);
      Session.set("fighting", false);
      Session.set("monsterSetting", "toilets");
      Session.set("fighting", true);    //////////////////////////////// in here for testing
      Session.set("playerhealth",100);
   }
});

Router.route('/urbanart', function () {
  this.render('art');
});

Template.urbanart.helpers({
  planarmonsters: function() {
  	//console.log('looking for monsters');
    return Monsters.planar();
  }
});

Template.urbanart.events({
   'click .monstername': function(e) {
    	//console.log('setting name = '+this.name);   
      Session.set("selectedMonster", this.name);
      Session.set("fighting", false);
      Session.set("monsterSetting", "planar");
      Session.set("fighting", true);    //////////////////////////////// in here for testing
      Session.set("playerhealth",100);
   }
});
