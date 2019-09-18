sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("ovly.navigation.controller.S3", {

		onInit: function () {
			this.oLayoutModel = this.getOwnerComponent().getModel("layout");
			this.getOwnerComponent().getRouter().getRoute("pessoa").attachPatternMatched(this.onPatternMatched, this);
		},

		onPatternMatched: function (oEvent) {
			this.oLayoutModel.setProperty("/layout", sap.f.LayoutType.ThreeColumnsEndExpanded);

			var oParameters = oEvent.getParameters();
			var oArguments = oParameters.arguments; // NAO EH FUNCAO
			//var sIdEquipe = oArguments.idEquipe;
			var sIdPessoa = oArguments.idPessoa;

			this.getView().bindElement({
				path: "/Employees('" + sIdPessoa + "')"
			});
		},

		onBack: function (oEvent) {
			this.getOwnerComponent().getRouter().navTo("equipe", {
				idEquipe: this.getView().getBindingContext().getProperty("Team_ID")
			});
		}

	});

});