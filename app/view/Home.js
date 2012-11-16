Ext.define('NYU-MVC.view.Home',{
    extend: 'Ext.DataView',
	xtype: 'observationList',
	requires: ['NYU-MVC.store.Obs'],
	config: {
		title: 'Home',
		iconCls: 'home',
        itemTpl: '{uuid} {obsDatetime}',
        store: 'obsStore',
        onItemDisclosure: true,
			items: [
				{
					xtype: "toolbar",
					docked: "top",
					title: "Observations",
					items: [
						{
							xtype: "spacer"
						},
						{
							xtype: 'button',
							text: 'New',
							ui: 'action',
							id: 'new-observation-btn'
						},
						{
							xtype: 'button',
							text: 'Get Obs',
							ui: 'action',
							id: 'get-observation-btn'
						}
					]
				}
				]
	}
});