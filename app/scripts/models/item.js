/*global BackboneTemplate, $*/
(function($){
    'use strict';

    BackboneTemplate.Models.Item = Backbone.Model.extend({
        defaults: { 
            thing: 'awesome'
        },
    });
})(jQuery);