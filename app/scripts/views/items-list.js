/*global BackboneTemplate, $*/

(function($){

  BackboneTemplate.Views.ItemsList = Backbone.View.extend({

    el: '#content-box',

    // `ItemView`s now respond to two clickable actions for each `Item`: swap and delete.
    events: {
      'click span.delete': 'remove'
    },
    // `initialize()` now binds model change/removal to the corresponding handlers below.
    initialize: function(){
      console.log('init')
      _.bindAll(this, 'render', 'unrender', 'remove'); // every function that uses 'this' as the current object should be in here

      this.collection.bind('add', this.render);
      this.collection.bind('remove', this.unrender);

      this.render();
    },

    render: function(){
      console.log('render')
      var renderedContent = '';
      for(var i=0; i < this.collection.length; i++){
        var item = this.collection.models[i];

        renderedContent += item.attributes.thing + "</br>";
      };

      $(this.el).html(renderedContent);
    },
    // `unrender()`: Makes Model remove itself from the DOM.
    unrender: function(){
      $(this.el).remove();
    },
    // `remove()`: We use the method `destroy()` to remove a model from its collection. Normally this would also delete the record from its persistent storage, but we have overridden that (see above).
    remove: function(){
      this.model.destroy();
    }
  });
})(jQuery); 