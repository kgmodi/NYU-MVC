Ext.define('NYU-MVC.controller.Main',{
	extend: 'Ext.app.Controller',
	
	views: ['Home', 'Products', 'Blog'],
	stores: ['Obs'],
	models: ['Observation'],
	config: {
		refs: {
			newObservationBtn: "#new-observation-btn",
			getObservationBtn: "#get-observation-btn",
			observationList : 'observationList'
		},
		control: {
			newObservationBtn: {
				tap: "onNewObservation"
			},
			getObservationBtn: {
				tap: "onGetObservation"				
			}
		}
	},
	launch: function() {
        Ext.getStore('Obs').load({
            callback: this.onObservationLoad,
            scope: this
        });
    },
	onNewObservation: function () {
		console.log('on New Obs');
	},
	onGetObservation: function () {
		console.log('on GEt Obs');
		var obsStore = Ext.create('NYU-MVC.store.Obs',{
			storeId: 'obsStore'
		});
        console.log(obsStore);
		console.log(this.getObservationList());
        var list = this.getObservationList();
		list.setStore(obsStore);
        obsStore.load();

	},
	onObservationLoad: function (){
		console.log('on observation load');
	},
	init: function() {
		console.log('hey');
	}
	
	
	
});