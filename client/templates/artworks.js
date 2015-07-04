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
      Session.set("monsterSetting", "planar");
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
      Session.set("monsterSetting", "bbqs");
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
      Session.set("monsterSetting", "pits");
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
      Session.set("monsterSetting", "nodes");
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
      Session.set("monsterSetting", "bins");
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
      Session.set("monsterSetting", "parks");
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
      Session.set("monsterSetting", "playgrounds");
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
      Session.set("monsterSetting", "trees");
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
      Session.set("monsterSetting", "toilets");
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
      Session.set("monsterSetting", "planar");
   }
});
