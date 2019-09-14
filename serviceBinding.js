function initModel() {
	var sUrl = "/sap/opu/odata/iwbep/TEA_TEST_APPLICATION/";
	var oModel = new sap.ui.model.odata.ODataModel(sUrl, true);
	sap.ui.getCore().setModel(oModel);
}