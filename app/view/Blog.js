Ext.define('NYU-MVC.view.Blog',{
	extend: 'Ext.List',
	xtype: 'blogpage',
	
	config: {
		title: 'Blog',
		iconCls: 'star',
		
		itemTpl: '{title}'
		
	}
});