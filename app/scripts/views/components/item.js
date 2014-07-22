/*global BackboneTemplate, $*/

(function($){

  BackboneTemplate.Views.Components.Item = Backbone.View.extend({
 
    initialize: function () {
        this.render();
    },
 
    render: function () {
        this.$el.html(JST['app/scripts/templates/components/item.ejs'](this.model));
    }
  });
})(jQuery);