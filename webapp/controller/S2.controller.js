sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("ovly.navigation.controller.S2", {

		onInit: function () {
			this.getOwnerComponent().getRouter().getRoute("equipe").attachPatternMatched(this.onPatternMatch, this);
		},

		onPatternMatch: function (oEvent) {
			var oParameters = oEvent.getParameters();
			var oArguments = oParameters.arguments; // NAO EH FUNCAO
			var sIdEquipe = oArguments.idEquipe;

			// console.log(sIdEquipe);
			
			this.getView().bindElement({
				path: "/Teams('" + sIdEquipe + "')" 
			});
		},

		onBack: function (oEvent) {
			this.getOwnerComponent().getRouter().navTo("inicial");
		},

		onItem: function (oEvent) {

		}

	});

});