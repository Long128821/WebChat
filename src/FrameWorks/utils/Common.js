var Common= {
    debugState:true,//是否为调试模式
    changeID:CHANGEID,//渠道号
    version:0x04000000,//版本号
    isDebugState:function(){
        return this.debugState;
    },
    getChannelID:function(){
        return this.changeID;
    },
    setChangeID:function(changeID){
        this.changeID= changeID;
    },
    getVersion:function(){
        return this.version;
    },
    setVersion:function(version){
        this.version= version;
    },
    /**
     * Func:判断一个值是否有效
     * @param value
     * @returns {boolean} 该值既不为null,又不是undefined时，返回true,否则false
     */
    judgeValueIsEffect:function(value){
        return (value!= undefined&& value!= null);
    },
    //获取Map的有效长度
    //原因:在销毁或者删除之后，只能把map中的value置空(null),却不能把key置空，此key已经被占用
    getTableSize:function(table){
        var size= 0;
        for(var key in table){
            if(this.judgeValueIsEffect(table[key])){
                size++;
            }
        }
        return size;
    },

    //获取值
    getCardValue:function(key, table){
        if((!this.judgeValueIsEffect(key))||(!this.judgeValueIsEffect(table))) return null;
        for(var _key in table){
            if(_key == key){
                return table[_key];
            }
        }
        return null;
    },
    //ImageView换图(网络)
    setTextureByNet:function(url, target){
        //异步加载头像资源
        cc.loader.loadImg(
            url,
            function(){},
            function(err){
                //加载成功
                (err== null&&target._imageRenderer.setTexture(url));
            }
        );
    },
    addSpriteByNet:function(url, callback){
        //异步加载头像资源
        cc.loader.loadImg(
            url,
            function(err){
                if(callback!= undefined){
                    callback(err==null?cc.Sprite.create(url):"ERROR");
                }
            }
        );
    },
    createArmature:function(jsonPath, armatureName, callback){
        this.loadArmature(jsonPath, function(){
            ccs.armatureDataManager.addArmatureFileInfo(jsonPath);
            callback(ccs.Armature.create(armatureName));
        });
    },
    loadArmature:function(jsonPath, callback){
        var jsonName= jsonPath.substring(0, jsonPath.lastIndexOf("."));
        var index= 0;
        Load.LoadJsonOrPic([
            jsonName+"0.png",
            jsonName+"0.plist",
            jsonPath
        ],function(){
            callback();
        });
    },
    //获取金花资源路径
    getJinHuaResourcePath:function(path){
        return "res/"+ path;
    },
    /**
     * Func:显示WebView
     * @param webURL 读取web的url地址
     * @param pos 相对于屏幕左下角位移
     * @param size webview的尺寸(宽和高)
     * @param color webView背景色，默认为rgb(56, 0, 38)
     */
    showWebView:function(webURL, pos, size, target, color){
        var webView = new ccui.WebView(webURL);
        webView.setContentSize(size);
        webView.setAnchorPoint(cc.p(0,0));
        //移除原有的webView
        //获取bgColor(this.Panel_webview._color)
        //设置背景色
        webView._renderCmd._div.style["background"]= ((color== undefined)?"rgb(56, 0, 38)":color);

        var canvasWidth=  cc.game.canvas.width;
        var canvasHeight=  cc.game.canvas.height;
        var leftBottomPos= cc.p((document.body.clientWidth- canvasWidth)* 0.5/cc.view.getScaleX(), (document.body.clientHeight- canvasHeight)* 0.5/cc.view.getScaleY());
        webView.setPosition(cc.pAdd(leftBottomPos, pos));

        target.addChild(webView);
        return webView;
    },
    //删除字符串中的所有的空格
    deleteAllSpace:function(str){
        var temp= "";
        for(var i=0;i< str.length; ++i){
            if(str.charCodeAt(i)!= 32){
                temp+= str.charAt(i);
            }
        }
        str= temp;
        return str;
    },
    //获取字符串中包含的某个字符或者子串的个数
    getCharCount:function(str, char){
        var length= 0;
        while(str.indexOf(char)!= -1){
            length++;
            str= str.substring(str.indexOf(char)+ 1, str.length);
        }
        return length;
    },
    showToast:function(txt, toastSecond){
        var scene= cc.director.getRunningScene();

        var self= this;
        Load.LoadJsonOrPic("res/toast_bg.png", function(){
            var msg= cc.LabelTTF.create(txt, "微软雅黑",20);
            //根据要显示的文案的宽度和高度，设置点九图的尺寸
            var toastSp= GamePub.createPointNineSpriteForPlist("res/toast_bg.png", 20, 90, msg.width+ 50, msg.height+ 20);
            scene.addChild(toastSp);
            toastSp.setPosition(cc.winSize.width* 0.5, cc.winSize.height* 0.35);

            msg.setPosition(toastSp.getContentSize().width* 0.5, toastSp.getContentSize().height* 0.5);
            toastSp.addChild(msg);

            self.toastMoveUp(toastSp, toastSecond== undefined?2:toastSecond);
        });
    },
    //上移&&不透明度逐渐降低
    toastMoveUp:function(toast, toastSecond){
        var moveTo= cc.moveTo(1, cc.winSize.width* 0.5, cc.winSize.height* 0.65);
        var delay= cc.delayTime(toastSecond);
        var fadeOut= cc.fadeOut(1, 128);
        var spawn= cc.spawn(moveTo, fadeOut);
        var seq= cc.sequence(delay, spawn, cc.callFunc(function(pSender){
            toast.removeFromParent(true);
        }));
        toast.runAction(seq);
    }
};

//根据是否Debug模式，设置是否显示、启动showFPS、debugMode
cc.director.setDisplayStats(Common.isDebugState());