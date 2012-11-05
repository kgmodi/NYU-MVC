Ext.define('NYU-MVC.view.Home',{
	extend: 'Ext.Panel',
	xtype: 'homepanel',
	
	config: {
		title: 'Home',
		iconCls: 'home',
		html: [
			'<p> Welcome to my page </p>'
		].join("")
	}
});