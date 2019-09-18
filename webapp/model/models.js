sap.ui.define([
	"sap/ui/model/json/JSONModel",
	"sap/ui/Device"
], function (JSONModel, Device) {
	"use strict";

	return {

		createDeviceModel: function () {
			var oModel = new JSONModel(Device);
			oModel.setDefaultBindingMode("OneWay");
			return oModel;
		},
		
		createLayoutModel: function(){
			var oModel = new JSONModel({
				layout: sap.f.LayoutType.OneColumn
			});
			return oModel;
		}

	};
});