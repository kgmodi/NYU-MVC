Ext.define('NYU-MVC.view.Viewport', {
	extend: 'Ext.TabPanel',
	
	config: {
			fullscreen : true,
			tabBarPosition: 'bottom',
			items: [

				{
					xtype: 'observationList'
				},
				{
					xtype: 'productspage'
				},
				{
					xtype: 'blogpage',
					
					store: {
						fields: ['title', 'url'],
						data: [
							{title: 'Blog 1', url: 'http://kgmodi.blogspot.com'},
							{title: 'Blog 1', url: 'http://kgmodi.blogspot.com'},
							{title: 'Blog 1', url: 'http://kgmodi.blogspot.com'}	
						]
							
					}
				}
			]
	}
});