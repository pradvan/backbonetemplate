/*global BackboneTemplate, $*/

(function($){

  BackboneTemplate.Views.ItemsList = Backbone.View.extend({

    el: '#BTapp',

    defaults: {
    },

    t_header: this.JST['app/scripts/templates/header.ejs'],
    t_footer: this.JST['app/scripts/templates/footer.ejs'],
    t_new: this.JST['app/scripts/templates/new-item.ejs'],
    t_item_list: this.JST['app/scripts/templates/item-list.ejs'],

    events: {
      'click .delete': 'remove',
      'click #addItem': 'newItem'
    },
    
    initialize: function(){
      console.log('init');

      // every function that uses 'this' as the current object should be in here
      _.bindAll(this, 'render', 'rerender', 'unrender', 'remove');

      this.collection = new BackboneTemplate.Collections.ItemsList();
      this.collection.bind('add', this.renderItem);
      this.collection.bind('remove', this.rerender);

      this.render();

      this.collection.fetch({
        add: true,
        success: this.loadCompleteHandler,
        error: this.errorHandler
      });
    },

    render: function(){
      console.log('render');
      
      this.unrender();

      this.$el.append(this.t_header());
      this.$el.append(this.t_new());
      this.$el.append(this.t_item_list());
      this.$el.append(this.t_footer());
    },

    rerender: function(){
      console.log('rerender');
      
      this.unrender();

      this.$el.append(this.t_header());
      this.$el.append(this.t_new());
      this.$el.append(this.t_item_list());
      this.collection.each(this.renderItem, this);
      this.$el.append(this.t_footer());
    },

    loadCompleteHandler : function(event){
      console.log('loadCompleteHandler');
    },

    errorHandler : function(event){
      throw "Error loading JSON";
    },

    newItem:function (event){
      event.preventDefault();
      var name = $("#itemName").val();
      $("#itemName").val('');
      if(name == ""){
        name = "Empty";
      }
      this.collection.add(new BackboneTemplate.Models.Item({thing: name}));
    },
    
    unrender: function(){
      $(this.el).empty();
    },

    renderItem: function (item) {
      console.log('renderItem');
      $('#item-list-container').append(new BackboneTemplate.Views.Item({
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