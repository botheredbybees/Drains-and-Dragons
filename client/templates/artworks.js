Router.route('/art', function () {
  this.render('art');
});

Template.art.helpers({
  planarmonsters: function() {
  	console.log('looking for monsters');
    return Monsters.planar();
  }
});