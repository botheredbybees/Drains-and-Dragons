Template.bookmarks.helpers({
  recipeCount: function() {
    return pluralize(this.length, 'badge');
  }
});