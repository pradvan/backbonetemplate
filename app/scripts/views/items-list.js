/*global BackboneTemplate, $*/

(function($){

  BackboneTemplate.Views.ItemsList = Backbone.View.extend({

    el: '#BTapp',

    defaults: {
      
    },

    t_header: this.JST['app/scripts/templates/header.ejs'],
    t_footer: this.JST['app/scripts/templates/footer.ejs'],
    t_new: this.JST['app/scripts/templates/new-item.ejs'],

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
      console.log('render');
      
      this.unrender();

      this.$el.append(this.t_header());
      this.$el.append(this.t_new());

      this.collection.each(this.renderItem, this);

      this.$el.append(this.t_footer());
    },

    newItem:function (event){
      event.preventDefault();
      var name = $("#itemName").val();
      if(name == ""){
        name = "Empty";
      }
      this.collection.add(new BackboneTemplate.Models.Item({thing: name}));
    },
    
    unrender: function(){
      $(this.el).empty();
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