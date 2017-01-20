var CocoStudio= {
    createView:function(jsonFile){
        var view= ccs.uiReader.widgetFromJsonFile(jsonFile);

        if (!view) {
            console.error("Load json file failed:"+ jsonFile);
            return;
        }
        return view;
    },
    getComponent:function(root, name){
        return ccui.helper.seekWidgetByName(root, name);
    }
};
