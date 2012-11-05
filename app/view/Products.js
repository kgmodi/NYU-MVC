Ext.define('NYU-MVC.view.Products',{
	xtype: 'productspage',
	extend: 'Ext.Carousel',
	
	config: {
		title: 'Products',
		iconCls: 'star',
		items: [
			{
				xtype: 'image',
				src: 'http://img1.imagesbn.com/p/9781118431429_p0_v1_s300x475'
			},
			{
				xtype: 'image',
				src: 'http://img1.imagesbn.com/p/883929182879'
			}
		]
	}
});