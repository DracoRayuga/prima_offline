sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("opensap.prima.controller.App", {
            onInit: function () {

            },
            onUploadAttachmentDialogCancel: function (oEvent) {
			    this.oDialog.destroy();
		    },
            onupload: function(oEvent){
                var that = this;
                var oView = this.getView();
                that.oDialog = oView.byId("uploadfragment");
						if (!that.oDialog) {
							// create dialog via fragment factory
							that.oDialog = sap.ui.xmlfragment(oView.getId(), "opensap.prima.fragment.upload", that);
							oView.addDependent(that.oDialog);
						}
						that.oDialog.open();
            },
            onUploadfilethroughodatav4: function(oEvent){
                
            }
        });
    });
