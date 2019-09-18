sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("ovly.navigation.controller.S2", {

		onInit: function () {
			this.oLayoutModel = this.getOwnerComponent().getModel("layout");
			this.getOwnerComponent().getRouter().getRoute("equipe").attachPatternMatched(this.onPatternMatched, this);
			this.getOwnerComponent().getRouter().getRoute("pessoa").attachPatternMatched(this.onPatternMatched, this);
		},

		onPatternMatched: function (oEvent) {

			var oParameters = oEvent.getParameters();
			var sRouteName = oParameters.name;
			if (sRouteName === "equipe") {
				this.oLayoutModel.setProperty("/layout", sap.f.LayoutType.TwoColumnsMidExpanded);
			}

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

		onItemPress: function (oEvent) {

			var oParameters = oEvent.getParameters();
			var oListItem = oParameters.listItem; // NAO EH FUNCAO
			var oContext = oListItem.getBindingContext();
			var sEquipeId = oContext.getProperty("Team_ID");
			var sPessoaId = oContext.getProperty("Id");

			this.getOwnerComponent().getRouter().navTo("pessoa", {
				idEquipe: sEquipeId,
				idPessoa: sPessoaId
			});

		}

	});

});