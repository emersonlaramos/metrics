// Ref: http://experience-aem.blogspot.com/2017/09/aem-63-touch-ui-extend-rich-text-link-dialog-add-rel-select.html
(function ($) {
    "use strict";

    var _ = window._,
        Class = window.Class,
        CUI = window.CUI,
        DATATRACK_FIELD = "data-track",
        RTE_LINK_DIALOG = "rtelinkdialog";

    if (CUI.rte.ui.cui.CuiDialogHelper.eaemExtended) {
        return;
    }

    var EAEMLinkBaseDialog = new Class({
        extend: CUI.rte.ui.cui.CQLinkBaseDialog,

        toString: "EAEMLinkBaseDialog",

        initialize: function (config) {
            this.superClass.initialize.call(this, config);

            this.$rteDialog = this.$container.find("[data-rte-dialog=link]");

            this.$rteDialog.find(".rte-dialog-columnContainer:last").before(getLinkRelOptionsHtml());
        },

        dlgToModel: function () {
            this.superClass.dlgToModel.call(this);

            var dataTrackField = this.getFieldByType(DATATRACK_FIELD);

            if (_.isEmpty(dataTrackField)) {
                return;
            }

            var dataTrackVal = dataTrackField.val();

            if (_.isEmpty(dataTrackVal)) {
                return;
            }

            this.objToEdit.attributes["data-track"] = dataTrackVal;
        },

        dlgFromModel: function () {
            this.superClass.dlgFromModel.call(this);

            if (_.isEmpty(this.objToEdit.attributes)) {
                return;
            }

            var dataTrackValue = this.objToEdit.attributes['data-track'];

            if (_.isEmpty(dataTrackValue)) {
                return;
            }

            var dataTrackInput = this.$rteDialog.find("[data-type='data-track']");

            dataTrackInput.val(dataTrackValue)

        }
    });

    CUI.rte.ui.cui.CuiDialogHelper = new Class({
        extend: CUI.rte.ui.cui.CuiDialogHelper,

        toString: "EAEMCuiDialogHelper",

        instantiateDialog: function (dialogConfig) {
            var type = dialogConfig.type;

            if (type !== RTE_LINK_DIALOG) {
                this.superClass.instantiateDialog.call(this, dialogConfig);
                return;
            }

            var $editable = $(this.editorKernel.getEditContext().root),
                $container = CUI.rte.UIUtils.getUIContainer($editable),
                dialog = new EAEMLinkBaseDialog();

            dialog.attach(dialogConfig, $container, this.editorKernel);

            return dialog;
        }
    });

    function getLinkRelOptionsHtml() {
        var html = `
                    <div class='rte-dialog-columnContainer'>
                        <div class='rte-dialog-column'>
                            <input data-type='data-track' is='coral-textfield' placeholder='Data-Track' />
                        </div>
                    </div>
        `

        return html;

    }

    CUI.rte.ui.cui.CuiDialogHelper.eaemExtended = true;
})(jQuery);