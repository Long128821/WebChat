cc.game.onStart = function(){
    if(!cc.sys.isNative && document.getElementById("cocosLoading")) //If referenced loading.js, please remove it
        document.body.removeChild(document.getElementById("cocosLoading"));

    cc.view.enableRetina(cc.sys.os === cc.sys.OS_IOS ? true : false);
    cc.view.enableRetina(true);
    cc.view.adjustViewPort(true);
    cc.view.setDesignResolutionSize(568, 320, cc.ResolutionPolicy.SHOW_ALL);
    cc.view.resizeWithBrowserSize(true);

    //自动登录——初始化WbSocket
    Network.getInstance().initNetwork();

    //加载完毕之后
    MvcEngine.init();
    MvcEngine.createModule(GUI_LOGIN);//创建Table
};
cc.game.run();