/*global BackboneTemplate, $*/

(function($){

  BackboneTemplate.Views.ItemsList = Backbone.View.extend({

    el: '#content-box',

    template: this.JST['app/scripts/templates/items-list.ejs'],

    events: {
      'click span.delete': 'remove'
    },
    
    initialize: function(){
      console.log('init')

      // every function that uses 'this' as the current object should be in here
      _.bindAll(this, 'render', 'unrender', 'remove');

      this.collection.bind('add', this.render);
      this.collection.bind('remove', this.unrender);

      this.render();
    },

    render: function(){
      console.log('render')
      var renderedContent = '';
      for(var i=0; i < this.collection.length; i++){

        var item = this.collection.models[i];
        renderedContent += this.template({thing: item.attributes.thing});
      };

      $(this.el).html(renderedContent);
    },

    unrender: function(){
      $(this.el).remove();
    },
    
  remove: function(){
      this.model.destroy();
    }
  });
})(jQuery);