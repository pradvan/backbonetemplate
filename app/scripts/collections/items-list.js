/*global BackboneTemplate, $*/
(function($){
    'use strict';

    BackboneTemplate.Collections.ItemsList = Backbone.Collection.extend({

        model: BackboneTemplate.Models.Item,

		initialize: function(){
			/*
			this.bind("add", function( model ){
				view.render( model );
			})
			*/
		}
    });
})(jQuery); 