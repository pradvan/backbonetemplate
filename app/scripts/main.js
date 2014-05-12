/*global BackboneTemplate, $*/
var BackboneTemplate = BackboneTemplate || {};

BackboneTemplate = {
    Models: {},
    Collections: {},
    Views: {},
    Routers: {},

    collection: null,

    init: function () {
        'use strict';
        console.log('Init BackboneTemplate');

        var item = new BackboneTemplate.Models.Item({thing:'great!'});
        var item2 = new BackboneTemplate.Models.Item({thing:'awesome'});
        var item3 = new BackboneTemplate.Models.Item({thing:'very awesome!'});

        this.collection = new BackboneTemplate.Collections.ItemsList([item, item2, item3]);
        BackboneTemplate.itemsList = new BackboneTemplate.Views.ItemsList({collection: this.collection});
    }
};

$(document).ready(function () {
    'use strict';
    BackboneTemplate.init();
});