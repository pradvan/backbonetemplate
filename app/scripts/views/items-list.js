/*global BackboneTemplate, $*/

(function($){

  BackboneTemplate.Views.ItemsList = Backbone.View.extend({

    el: '#content-box',

    t_header: this.JST['app/scripts/templates/header.ejs'],
    t_footer: this.JST['app/scripts/templates/footer.ejs'],
    t_nav: this.JST['app/scripts/templates/nav-list.ejs'],
    t_list: this.JST['app/scripts/templates/items-list.ejs'],

    events: {
      'click span.delete': 'remove'
    },
    
    initialize: function(){
      console.log('init')

      // every function that uses 'this' as the current object should be in here
      _.bindAll(this, 'render', 'unrender', 'remove');
      
      this.collection.bind('add', this.render);
      this.collection.bind('remove', this.unrender);

      this.collection.on("change:thing", this.render, this);

      this.render();
    },

    render: function(){
      console.log('render')
      var renderedContent = '';

      renderedContent += this.t_header();
      renderedContent += this.t_nav();

      for(var i=0; i < this.collection.length; i++){

        var item = this.collection.models[i];
        renderedContent += this.t_list({thing: item.attributes.thing});
      };

      renderedContent += this.t_footer();

      $(this.el).html(renderedContent);
    },

    unrender: function(){
      console.log('unrender')
      $(this.el).remove();
    },

    remove: function(){
      console.log('remove');
    }
  });
})(jQuery);