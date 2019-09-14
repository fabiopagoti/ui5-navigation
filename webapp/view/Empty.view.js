sap.ui.jsview("ovly.navigation.view.Empty", {

	getControllerName: function () {
		return "ovly.navigation.controller.Empty";
	},

	createContent: function (oController) {
		// return new sap.m.Page();
	
		var oButton = new sap.m.Button({
			text: "Ação 1"
		});
		
		var oMessagePage = new sap.m.MessagePage({
			icon: "sap-icon://question-mark",
			text: "Oooops",
			description: "Registro não encontrado",
			buttons: 
				[
					oButton,
					new sap.m.Button({
						text: "Ação 2"
					})
				]
		});
		
		return oMessagePage;
	}

});