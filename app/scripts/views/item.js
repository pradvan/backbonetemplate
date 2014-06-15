/*global BackboneTemplate, $*/

(function($){

  BackboneTemplate.Views.Item = Backbone.View.extend({
 
    initialize: function () {
        this.render();
    },
 
    render: function () {
        this.$el.html(JST['app/scripts/templates/item.ejs'](this.model));
    }
  });
})(jQuery);