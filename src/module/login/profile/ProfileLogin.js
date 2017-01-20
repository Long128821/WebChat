//数据图集
var ProfileLogin= {
    mUserIDValue:0,//登录/注册界面存储的用户ID
    mUserNameValue:null,//登录/注册界面存储的用户昵称
    mPasswordValue:null,//登录/注册界面存储的用户密码
    isChangeAccount:false,//是否切换账户
    getLoginPassword:function(){
        return this.mPasswordValue;
    },
    setLoginPassword:function(password){
        this.mPasswordValue= password;
    },
    getLoginUserName:function(){
        return this.mUserNameValue;
    },
    setLoginUserName:function(userName){
        this.mUserNameValue= userName;
    },
    //切换账户
    setChangeAccount:function(isChange){
        this.isChangeAccount= isChange;
    },
    //切换账户时，更新账户数据
    initAllGameData:function(userID){
        if(this.isChangeAccount){
            this.isChangeAccount= false;
            profile_user.initUserInfo(userID);
        }
    },
    //在本地数据中，存储登录账户数据
    saveUserData:function(){
        var UserID = profile_user.getSelfUserID();
        var username = profile_user.getSelfNickName();
        var password = profile_user.getSelfPassword();

        if(UserID== 0|| username== null) return;

        if(window.localStorage){//支持本地存储
            if(window.localStorage.getItem("userInfo")!= null){//已有数据
                var userInfo= window.localStorage.getItem("userInfo");//本地存储中，已经存在用户数据
                var userInfo_map= JSON.parse(userInfo);
                if((UserID== userInfo_map["UserID"])&&(username== userInfo_map["nickname"])&&(password== userInfo_map["password"])) return;
            }
            var userInfoMap = {};
            userInfoMap["UserID"] = UserID;
            userInfoMap["nickname"] = username;
            userInfoMap["password"] = password;

            //localStorage不支持直接存储对象，需要借助JSON.stringify转换为json串
            var str= JSON.stringify(userInfoMap);
            //本地存储
            window.localStorage.setItem("userInfo",str);
        }
    },
    //读取账户和密码
    readLocalStorageData:function(){
        if(window.localStorage) {//支持本地存储
            if (window.localStorage.getItem("userInfo") != null) {//已有数据
                var userInfo = window.localStorage.getItem("userInfo");//本地存储中，已经存在用户数据
                var userInfo_map = JSON.parse(userInfo);//将Json串转为Json对象

                console.log("本地账号:"+userInfo_map["nickname"]+ " "+ userInfo_map["password"]);

                profile_user.setSelfUserID(userInfo_map["UserID"]);

                ProfileLogin.setLoginUserName(userInfo_map["nickname"]);
                ProfileLogin.setLoginPassword(userInfo_map["password"]);
            }else{
                //Todo:删除:测试时，如果本地没有本地存储，那么添加
                //记录登录账户的用户名和密码
                profile_user.setSelfUserID("103488");
                ProfileLogin.setLoginUserName("long8911");
                ProfileLogin.setLoginPassword("128821");
            }
        }
    },
    //界面收到登录信息后处理
    loginManage:function(dataTable){
        var result= dataTable["result"];
        var resultText= dataTable["ResultTxt"];

        if(result== 0){
            //玩家登陆信息已经改变
            ProfileLogin.isChangeAccount= true;
            //初始化账户数据
            ProfileLogin.initAllGameData(dataTable["UserID"]);
            //存储本地对应的密码
            profile_user.setSelfPassword(ProfileLogin.getLoginPassword());
            //设置一些基本数据
            profile_user.readBASEID_LOGIN(dataTable);

            //本地保存用户数据
            ProfileLogin.saveUserData();
            MvcEngine.createModule(GUI_HALL);
        }else{
            //Todo:Toast:登录失败提示
            Common.showToast(resultText);
        }
    },
    //界面收到注册信息后处理
    registerManage:function(dataTable){
        var result= dataTable["Result"];
        var resultText= dataTable["ResultTxt"];

        if(result== 0){
            //玩家登陆信息已经改变
            ProfileLogin.isChangeAccount= true;
            //初始化账户数据
            ProfileLogin.initAllGameData(dataTable["UserID"]);

            //设置一些基本数据
            profile_user.readBASEID_REGISTER(dataTable);

            //本地保存用户数据
            ProfileLogin.saveUserData();
            MvcEngine.createModule(GUI_HALL);
        }else{
            //Todo:Toast:登录失败提示
            alert(resultText);
        }
    },
    //界面收到登录成功
    loginSuccess:function(){

    },
    //根据IMEI获得绑定该设备的用户列表
    IMEIUserListManage:function(dataTable){
        console.log("Profile");
    }
};

//登陆页面-首先读取本地数据
ProfileLogin.readLocalStorageData();