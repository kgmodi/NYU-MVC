Ext.define('NYU-MVC.controller.Main',{
	extend: 'Ext.app.Controller',
	
	views: ['Home', 'Products', 'Blog'],
	
	init: function() {
		console.log('hey');
	}
});