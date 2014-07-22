/*global BackboneTemplate, $*/
var BackboneTemplate = BackboneTemplate || {};

(function($){
    BackboneTemplate = {
        Models: {},
        Collections: {},
        Views: {
            Components: {}
        },
        Routers: {},

        collection: null,

        init: function () {
            'use strict';
            console.log('Init BackboneTemplate');
            BackboneTemplate.itemsList = new BackboneTemplate.Views.ItemsList();
        }
    };
})(jQuery);

$(document).ready(function () {
    'use strict';
    BackboneTemplate.init();
});