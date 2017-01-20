//为什么不使用Object的方法propertyIsEnumerable、hasOwnProperty，首先检查一下是否包含key?
//原因:如果首先要检查key，Object同时也是使用了一次遍历。如果有的话，还需要第二次遍历，同时如果有的话，只需要找到对应的key就可以返回。
//不需要查询所有的变量
/**
 * Func:UI管理器
 */
var MvcEngine= {
    needCreateModuleName:null,//当前要创建的界面名称(GUIConfig中定义)
    needDestroyModuleName:null,//需要销毁的界面名称(GUIConfig中定义)
    needHandleModuleCount:0,//记录当前需要处理的界面数
    needAddActiveModuleTable : {},//记录当前需要添加到活跃队列的界面
    activeModuleTable : {},//当前显示的层(包括休眠的层)
    wakeModuleTable : {},//需要唤醒的层
    //delayTime : 0.2,//延时添加界面
    m_rootNode:null,//根节点，用户存放用户
    /**
     * Func:初始化UI管理器
     * 1、重置数据;
     * 2、创建Scene，并添加根节点
     */
    init:function(){
        this.needAddActiveModuleTable= {};
        this.activeModuleTable= {};
        this.wakeModuleTable= {};
        //this.delayTime= 0.2;
        this.needCreateModuleName= null;
        this.needDestroyModuleName= null;
        this.needHandleModuleCount= 0;
        this.m_rootNode= null;

        var scene= new cc.Scene();
        cc.director.runScene(scene);
        //获取根节点，以后游戏的所有Layer都放置到该节点下
        this.getRootNode(scene);
    },
    /**
     * Func:获取根节点
     * @param scene 游戏的整个场景
     */
    getRootNode:function(scene){
        ////console.log("getRootNode");
        if(!this.m_rootNode){
            this.m_rootNode= new cc.Node();
            scene.addChild(this.m_rootNode);
        }
    },
    /**
     * Func:获取要删除的界面
     * @param moduleName 要删除的界面名
     * @returns {*} 要删除的界面对象
     */
    removeModuleFromTable:function(moduleName){
        ////console.log("removeModuleFromTable");
        var module= null;

        //使用JS Object中hasOwnProperty判断table中是否存在该成员对象
        //次数也可以使用propertyIsEnumerable方法
        if(this.activeModuleTable.hasOwnProperty(moduleName)){
            //没有检测module是否为空的原因是:
            //因为此处，即便是否，都应该返回module
            module= this.activeModuleTable[moduleName];
            this.activeModuleTable[moduleName]= null;
        }
        return module;
    },
    /**
     * Func:删除需要添加到活跃队列的界面
     * @param moduleName 界面名
     * @returns {*} 界面对象
     */
    removeNeedAddActiveModuleFromTable:function(moduleName){
        ////console.log("removeNeedAddActiveModuleFromTable");
        var module= null;

        if(this.needAddActiveModuleTable.hasOwnProperty(moduleName)){
            module= this.needAddActiveModuleTable[moduleName];
            this.needAddActiveModuleTable[moduleName]= null;
        }
        return module;
    },
    //获取需要添加到活跃队列的界面数量
    getNeedAddActiveModuleSize:function(){
        ////console.log("getNeedAddActiveModuleSize");
        return Common.getTableSize(this.needAddActiveModuleTable);
    },
    /**
     * Func:获取当前显示的界面中的最大层级
     * @returns {number} 已经显示的界面中的最大层级
     */
    getActiveModuleMaxLayer:function(){
        ////console.log("getActiveModuleMaxLayer");
        var maxLayer = 0;//第一层级的Tag

        //遍历当前显示的所有Table
        for(var key in this.activeModuleTable){
            var value= this.activeModuleTable[key];
            if(Common.judgeValueIsEffect(value)){//是否有效
                var moduleLayer = value.getModuleLayer();//获取界面的对应层级
                if(maxLayer< moduleLayer){
                    maxLayer= moduleLayer;
                }
            }
        }
        return maxLayer;
    },
    //唤醒界面
    doWakeModule:function(addModuleName){
        ////console.log("doWakeModule");
        if(Common.judgeValueIsEffect(addModuleName)&& typeof addModuleName== "string"){
            //createView方法中可能同时创建了多个界面,需要屏蔽界面
            var isHasDestroyModule = false;//是否有需要销毁的层
            var sleepModuleTable = {};//休眠的层
            var layerOfCreateModule = ModuleTable[addModuleName]["Layer"];//要创建的界面层级
            //遍历当前活动页面，查找需要使用销毁和休眠的界面
            for(var key in this.activeModuleTable){
                var value= this.activeModuleTable[key];
                //判断该值是否有效
                if(Common.judgeValueIsEffect(value)){
                    var moduleLayer = value.getModuleLayer();//获取层级
                    if (layerOfCreateModule < moduleLayer) {
                        //高于新打开界面的层级销毁
                        isHasDestroyModule = true;
                    }else if (layerOfCreateModule > moduleLayer){
                        //小于新打开界面的层级休眠
                        //为Table赋值，当前Table有效的长度为key值，需要销毁的界面为value
                        sleepModuleTable[Common.getTableSize(sleepModuleTable)+ 1] = value;
                    }
                }
            }
            ////console.log("是否有需要销毁的界面:"+isHasDestroyModule);
            if(isHasDestroyModule){
                //连续创建界面时，保证下层不会唤醒
                if(Common.judgeValueIsEffect(this.activeModuleTable[addModuleName].getLayer())){
                    this.activeModuleTable[addModuleName].sleepModule();
                }
            }
            //休眠界面数组
            this.sleepModuleTable(sleepModuleTable);

            //有需要销毁的界面时，唤醒当前活动的最高一层
            if(Common.judgeValueIsEffect(this.needDestroyModuleName)){
                var destroyModuleLayer= ModuleTable[this.needDestroyModuleName]["Layer"];//要销毁的层级
                for(var key in this.activeModuleTable){
                    var value= this.activeModuleTable[key];
                    if(Common.judgeValueIsEffect(value)){
                        var moduleLayer= value.getModuleLayer();
                        if(destroyModuleLayer< moduleLayer){
                            //高于关闭界面的层级，则说明有演示弹出的界面
                            this.wakeModuleTable= {};
                        }else if(destroyModuleLayer> moduleLayer){
                            //填充唤醒界面Table, 长度+1 为key value为controller
                            this.wakeModuleTable[Common.getTableSize(this.wakeModuleTable)+ 1]= value;
                        }
                    }
                }
            }

            ////console.log(this.wakeModuleTable);
            //销毁时，唤醒的界面中层级最高的
            if(Common.getTableSize(this.wakeModuleTable)> 0){
                //筛选需要的唤醒的界面中层级最高的
                var wakeModule= this.getMaxModule(this.wakeModuleTable);

                //有需要唤醒的界面，同时view也不为空
                if(Common.judgeValueIsEffect(wakeModule)&&(Common.judgeValueIsEffect(wakeModule.getLayer()))){
                    wakeModule.wakeModule();
                }
                //清空唤醒列表
                this.wakeModuleTable= {};
            }
            //清空休眠数组，临时变量
            sleepModuleTable= null;
            this.needDestroyModuleName= null;

        }else{
            //没有需要创建的module，则唤醒最高级别的界面
            this.wakeMaxModule();
        }
    },
    //创建界面
    doCreateModule:function(isDelay){
        //console.log("doCreateModule");
        if(!Common.judgeValueIsEffect(this.needCreateModuleName)){
            //唤醒最高级别界面
            this.doWakeModule();
            return;
        }else{
            //根据名字，在ModuleConfig.js配置文件中，查找配置信息
            if(!Common.judgeValueIsEffect(ModuleTable[this.needCreateModuleName])){
                console.error("要创建的新界面("+this.needCreateModuleName+")没有在ModuleConfig.js配置！");
                return;
            }

            var self= this;
            //加载该页面中所使用的js文件
            Load.LoadResOfTable(self.needCreateModuleName, function(msg){
                //字符串拼接层名(GUI_Config.js中的层名+ "Controller")
                var className= self.needCreateModuleName+"Controller";
                var classFunc= eval(className);//将字符串转换为类名
                self._setModuleSettings(new classFunc());
            });
        }
    },
    //func:Table的初始化
    /**
     * @param className 新添加的类名(字符串)
     * @param moduleController 类对象
     * @private
     */
    _setModuleSettings:function(moduleController){
        ////console.log("_setModuleSettings");
        //根据在ModuleConfig.js中的配置，设置类的层级
        moduleController.setModuleLayer(ModuleTable[this.needCreateModuleName]["Layer"]);

        //字符串拼接层名(GUI_Config.js中的层名+ "Controller")
        var logicName= this.needCreateModuleName+"Logic";
        var logic= eval(logicName);//将字符串转换为类名
        this.m_rootNode.addChild(logic.view);//将新创建的Table,添加到根节点中，显示出来

        //需要添加到活动界面中
        this.needAddActiveModuleTable[this.needCreateModuleName]= moduleController;
        //当前已经活动界面
        this.activeModuleTable[this.needCreateModuleName]= moduleController;

        //唤醒创建的界面
        this.doWakeModule(this.needCreateModuleName);

        this.needCreateModuleName= null;
    },
    //当前界面休眠/销毁结束以后调用(界面Controller发送信号)
    //如没有需要休眠/销毁的界面，则直接调用
    slot_Destroy_Sleep_Done:function(){
        //console.log("slot_Destroy_Sleep_Done");
        //虽然此方法在该类中定义，但是因为根据调用该方法的对象不同(采用的是拼接字符串回调的方法，所以该函数中的this对象不同)
        //因此，转而使用MvcEngine代替this
        MvcEngine.needHandleModuleCount--;
        if(MvcEngine.needHandleModuleCount<= 0){
            MvcEngine.needHandleModuleCount= 0;
            //唤醒
            MvcEngine.doCreateModule();

            //移除监听信号
            Frameworks.removeSlotFromSignal(SignalCommon.Signal_DestroyModule_Done, MvcEngine.slot_Destroy_Sleep_Done);
            Frameworks.removeSlotFromSignal(SignalCommon.Signal_SleepModule_Done, MvcEngine.slot_Destroy_Sleep_Done);
        }
    },
    //移除所有Module
    destroyAllModules:function(){
        ////console.log("destroyAllModules");
        //遍历当前活动界面
        for(var key in this.activeModuleTable){
            var value= this.activeModuleTable[key];
            if(Common.judgeValueIsEffect(value)&&Common.judgeValueIsEffect(value.getLayer())){
                value.destroyModule(DESTROY_TYPE_CLEAN);
            }
        }
        this.activeModuleTable= {};
    },
    //获取当前显示的最高一层界面
    getMaxModule:function(moduleTable){
        ////console.log("wakeMaxModule");
        var module = null;
        var maxLayer = 0;
        //遍历当前活动界面
        for(var key in moduleTable){
            var value= moduleTable[key];

            if(Common.judgeValueIsEffect(value)){
                if(Common.judgeValueIsEffect(value.getLayer())){
                    var moduleLayer = value.getModuleLayer();
                    if (maxLayer <= moduleLayer){
                        maxLayer = moduleLayer;
                        module = value;
                    }
                }
            }
        }
        return module;
    },
    //唤醒最高层级的界面
    wakeMaxModule:function(){
        //获取需要唤醒的最高一层
        var module= this.getMaxModule(this.activeModuleTable);

        //如果该界面有效
        if(Common.judgeValueIsEffect(module)){
            module.wakeModule();
        }else{
            console.warn("要唤醒的界面为空！");
        }
    },
    //销毁某个界面
    destroyModule:function(moduleName, destroy_type){
        ////console.log("destroyModule");
        Frameworks.releaseClick();//释放活动的按钮
        //在该处可以使用this，不必使用MvcEngine代替的原因是:
        //虽然也是在别的对象中使用，但是调用该函数的方法是:MvcEngine.destroyModule,而不是使用this.callback方法。
        Frameworks.addSlot2Signal(SignalCommon.Signal_DestroyModule_Done, this.slot_Destroy_Sleep_Done);
        //销毁一个界面，一定会唤醒一个界面，最少销毁一个或者多个界面
        this.wakeOrDestroyModules(moduleName, destroy_type);
    },
    //销毁界面(关闭界面时调用，高于关闭界面的层级销毁，小于关闭界面的层级唤醒)
    //并存储需要唤醒的界面，执行结束
    wakeOrDestroyModules:function(moduleName, destroy_type){
        ////console.log("wakeOrDestroyModules");
        if(!Common.judgeValueIsEffect(moduleName)) return;

        this.needDestroyModuleName= moduleName;
        this.needHandleModuleCount= 0;

        //获取当前需要删除的界面
        var removeModule= this.removeModuleFromTable(moduleName);
        //判断需要销毁的界面是否为空
        if(!Common.judgeValueIsEffect(removeModule)) return;

        //需要销毁的界面层级
        var destroyModuleLayer= ModuleTable[moduleName]["Layer"];

        //获取需要销毁的Table
        var destroyModuleTable= this.getDestroyTable(destroyModuleLayer);

        this.needHandleModuleCount= Common.getTableSize(destroyModuleTable) + 1;
        ////console.log("需要销毁的数量:"+ this.needHandleModuleCount);
        ////console.log(destroyModuleTable);
        if(Common.getTableSize(destroyModuleTable)> 0){
            this.destroyModuleTable(destroyModuleTable, DESTROY_TYPE_CLEAN);
        }
        ////console.log(removeModule);
        //销毁界面
        if(Common.judgeValueIsEffect(removeModule.getLayer())){
            if(Common.judgeValueIsEffect(destroy_type)){
                removeModule.destroyModule(destroy_type);
            }else{
                removeModule.destroyModule(DESTROY_TYPE_CLEAN);
            }
        }
    },
    //获取需要销毁的界面Table
    getDestroyTable:function(destroyModuleLayer){
        var destroyModuleTable= {};
        ////console.log("需要销毁的层级:"+ destroyModuleLayer+" "+moduleName);
        for(var key in this.activeModuleTable){
            var value= this.activeModuleTable[key];
            if(Common.judgeValueIsEffect(value)){
                var moduleLayer = value.getModuleLayer();
                ////console.log("遍历-需要销毁的层级:"+ moduleLayer);
                if (moduleLayer== 0){
                    //如果要销毁的界面时第一层级，则高于一级的界面都要销毁
                    ////console.log(destroyModuleLayer+" "+ moduleLayer);
                    if(destroyModuleLayer< moduleLayer){
                        //高于关闭界面的层级销毁
                        //销毁Table赋值，key为长度+1
                        destroyModuleTable[Common.getTableSize(destroyModuleTable)+ 1]= value;
                        value= null;
                    }
                }
            }
        }
        return destroyModuleTable;
    },
    //要打开的界面
    createModule:function(moduleName, callback){
        //console.log("createModule");
        Frameworks.releaseClick();//释放当前按钮

        var self= this;
        //加载该页面中所使用的js文件
        //Todo:返回controller
        Load.LoadResOfTable(moduleName, function(msg){
            if(callback!= undefined) callback();
            //添加信号， 监听该页面的销毁和休眠
            Frameworks.addSlot2Signal(SignalCommon.Signal_SleepModule_Done, self.slot_Destroy_Sleep_Done);
            Frameworks.addSlot2Signal(SignalCommon.Signal_DestroyModule_Done, self.slot_Destroy_Sleep_Done);
            //创建该界面，对其他界面的影响(休眠、销毁)
            self.sleepOrDestroyModules(moduleName);
        });
    },
    //获取当前界面是否显示
    logicModuleIsShow:function(moduleName){
        ////console.log("logicModuleIsShow");
        for(var key in this.activeModuleTable){
            var value= this.activeModuleTable[key];
            //虽然可能存在，但是其值为空，这种情况下，也不算是显示
            if ((key== moduleName)&&(Common.judgeValueIsEffect(value))){
                return true;
            }
        }
        return false;
    },
    //休眠或者销毁界面
    sleepOrDestroyModules:function(moduleName){
        ////console.log("sleepOrDestroyModules");
        var layerOfCreateModule = ModuleTable[moduleName]["Layer"];//要创建的界面层级
        //console.log(layerOfCreateModule);
        //如果要创建的界面不是第一层级(第一层级Tag为0)
        if(layerOfCreateModule!= 0){
            ////console.log("！= 0 "+ moduleName);
            if(!this.activeModuleTable.hasOwnProperty(moduleName)&&//需要休眠的不是当前活动的
                Common.judgeValueIsEffect(this.activeModuleTable[moduleName])){//该界面没有被删除
                return;
            }
            //当前显示界面列表中的最大层级
            var maxLayer= this.getActiveModuleMaxLayer()+ this.getNeedAddActiveModuleSize();
            //console.log(maxLayer);
            ////console.log("当前最大层级:"+ maxLayer);
            //获取当前最大界面的下一级界面
            var layerTag= maxLayer + 1;

            ////console.log(moduleName);
            //新添加的界面的层级，设置为当前的层级最大
            ModuleTable[moduleName]["Layer"]= layerTag;
            layerOfCreateModule= layerTag;
        }
        var destroyModuleTable= {};//销毁的层
        var sleepModuleTable= {};//休眠的层
        var destroyType= {};//销毁类型

        this.needCreateModuleName = moduleName;
        this.needDestroyModuleName = null;//有新创建的界面，之前需要销毁的界面就不再处理唤醒事件

        ////console.log(this.activeModuleTable);
        ////console.log(getTableSize(this.activeModuleTable));
        //已显示界面
        for(var key in this.activeModuleTable){
            var value= this.activeModuleTable[key];
            if(Common.judgeValueIsEffect(value)){
                var moduleLayer = value.getModuleLayer();
                ////console.log(layerOfCreateModule+ " "+ moduleLayer);
                if (layerOfCreateModule<= moduleLayer){
                    //等于或者高于新打开界面的层级,销毁
                    if(this.needCreateModuleName== key){
                        //界面已经显示，则不销毁数据
                        destroyType[Common.getTableSize(destroyModuleTable)+ 1]= DESTROY_TYPE_EFFECT;
                    }else{
                        destroyType[Common.getTableSize(destroyModuleTable)+ 1]= DESTROY_TYPE_CLEAN;
                    }

                    destroyModuleTable[Common.getTableSize(destroyModuleTable)+ 1]= value;
                    this.activeModuleTable[key]= null;//从当前活动界面，删除
                }else if(layerOfCreateModule> moduleLayer){
                    //小于新打开的界面的层级休眠
                    sleepModuleTable[Common.getTableSize(sleepModuleTable)+ 1]= value;
                }
            }
        }
        ////console.log(this.needHandleModuleCount);
        //当前需要处理的界面数= 前一步需要处理的界面数 + 需要销毁的界面数量 + 需要休眠的界面数量
        this.needHandleModuleCount+= (Common.getTableSize(destroyModuleTable)+ Common.getTableSize(sleepModuleTable));

        //console.log(this.needHandleModuleCount);
        //如果没有需要唤醒的界面数，那么唤醒
        if(this.needHandleModuleCount== 0){
            this.slot_Destroy_Sleep_Done();
        }else{
            //销毁界面，销毁完成之后调用this.slot_Destroy_Sleep_Done()
            this.destroyModuleTable(destroyModuleTable, destroyType);

            //休眠界面，休眠完成以后会调用this.lot_Destory_Sleep_Done()
            console.log();
            this.sleepModuleTable(sleepModuleTable);
        }
    },
    //休眠界面Table
    sleepModuleTable:function(sleepModuleTable){
        if(Common.getTableSize(sleepModuleTable)== 0) return;
        for(var key in sleepModuleTable){
            var value= sleepModuleTable[key];
            if(Common.judgeValueIsEffect(value)){
                value.sleepModule();
            }
        }
    },
    //销毁界面Table By Table
    destroyModuleTable:function(destroyModuleTable, destroyType){
//        //console.log("销毁");
        var isNumber= (typeof destroyType== "number");
        for(var key in destroyModuleTable){
            var value= destroyModuleTable[key];
            if(Common.judgeValueIsEffect(value)){
                var moduleLayer = value.getModuleLayer();
                    if (Common.judgeValueIsEffect(moduleLayer)){
                    value.destroyModule(isNumber?destroyType:destroyType[key]);
                }
            }
        }
    }
};

//Todo:返回函数中，同时返回多个数据
//Todo:两次休眠
//Todo:根据长度添加Table的值时，可能会覆盖


//Todo:消息缓冲池
//Todo:本地存储(window.localStorage Or Sqlite)
//Todo:休眠时，如何保证按钮不可点击？
//Todo:两次休眠的原因是:一次自身、另一次比新创建的低，所以自动休眠