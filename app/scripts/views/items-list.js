/*global BackboneTemplate, $*/

(function($){

  BackboneTemplate.Views.ItemsList = Backbone.View.extend({

    el: '#content-box',

    defaults: {
      viewRendered: false
    },

    t_header: this.JST['app/scripts/templates/header.ejs'],
    t_footer: this.JST['app/scripts/templates/footer.ejs'],
    t_new: this.JST['app/scripts/templates/new-item.ejs'],
    t_list: this.JST['app/scripts/templates/items-list.ejs'],

    events: {
      'click .delete': 'remove',
      'click #addItem': 'newItem'
    },
    
    initialize: function(){
      console.log('init');

      // every function that uses 'this' as the current object should be in here
      _.bindAll(this, 'render', 'unrender', 'remove');
      
      this.collection.bind('add', this.render);
      this.collection.bind('remove', this.render);

      this.render();
    },

    render: function(){
      if(this.viewRendered){
        this.unrender();
      }

      var renderedContent = '';

      this.$el.append(this.t_header());
      this.$el.append(this.t_new());
      /*
      for(var i=0; i < this.collection.length; i++){
        var item = this.collection.models[i];
        renderedContent += this.t_list({id: item.cid, thing: item.attributes.thing});
      };      
      */

      this.collection.each(this.renderItem, this);

      this.$el.append(this.t_footer());

      this.viewRendered = true;
    },

    newItem:function (event){
      event.preventDefault();
      this.collection.add(new BackboneTemplate.Models.Item({thing: $("#itemName").val()}));
    },

    unrender: function(){
      $(this.el).empty();
      this.viewRendered = false;
    },

    renderItem: function (item) {
        this.$el.append(new BackboneTemplate.Views.Item({
            tagName: 'div',
            model: item
        }).el);
    },

    remove: function(e){
      var id = $(e.currentTarget).data("id");
      var item = this.collection.get(id);
      this.collection.remove(item);
    }
  });
})(jQuery);