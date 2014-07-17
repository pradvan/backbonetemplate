/*global BackboneTemplate, $*/
(function($){
    'use strict';

    BackboneTemplate.Collections.ItemsList = Backbone.Collection.extend({

        model: BackboneTemplate.Models.Item,
        url: 'data.json',

		initialize: function(){
			/*
			this.bind("add", function( model ){
				view.render( model );
			})
			*/
		}
    });
})(jQuery); 