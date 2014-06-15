/*global BackboneTemplate, $*/

(function($){

  BackboneTemplate.Views.Item = Backbone.View.extend({

    el: 'div',

    template: this.JST['app/scripts/templates/item.js'],

    events: {
      //'click span.delete': 'remove'
    },

    render: function(){
        var html = this.template(this.model.toJSON());
        $(this.el).append(html);
        console.log("!");
    }  
  });
})(jQuery);