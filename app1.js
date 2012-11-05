Ext.Loader.setConfig({
	enabled: true
});

Ext.application({
	name: "NYU-MVC",
	controllers: ['Main'],
	
	launch: function() {
		Ext.create('NYU-MVC.view.Viewport');
	}
});