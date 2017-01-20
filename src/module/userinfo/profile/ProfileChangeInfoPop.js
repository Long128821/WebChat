//数据图标集
var ProfileChangeInfoPop= {
    m_nickName:null,//昵称
    m_password:null,//密码
    m_curSexID:0,//当前性别ID
    getCurSexID:function(){
        return this.m_curSexID;
    },
    setCurSexID:function(sexID){
        return this.m_curSexID= sexID;
    },
    getNickName:function(){
        return this.m_nickName;
    },
    setNickName:function(nickName){
        return this.m_nickName= nickName;
    },
    getPassword:function(){
        return this.m_password;
    },
    setPassword:function(password){
        return this.m_password= password;
    },
    //消息BASEID_EDIT_BASEINFO
    slot_BASEID_EDIT_BASEINFO:function(dataTable){
        if(dataTable["Result"]== 0){
            var mNickname= ProfileChangeInfoPop.getNickName();
            var mPassword= ProfileChangeInfoPop.getPassword();
            var mSex= ProfileChangeInfoPop.getCurSexID();
            //昵称不为空&&有所改变
            if(mNickname!= null&&mNickname!= profile_user.getSelfNickName()){
                profile_user.setSelfNickName(mNickname);
            }
            //密码不为空&&密码有所改变
            if(mPassword!= null&&mPassword!= profile_user.getSelfPassword()){
                profile_user.setSelfPassword(mPassword);
            }
            //性别不为空&&性别有所改变
            if(mSex!= null&& mSex!= profile_user.getSelfSex()){
                profile_user.setSelfSex(mSex);
            }
            profile_user.setSelfNickName();
        }
        console.log(dataTable["ResultTxt"]);
        //销毁点击头像界面
        MvcEngine.destroyModule(GUI_OTHERUSERINFO);
        //销毁该界面
        MvcEngine.destroyModule(GUI_CHANGEINFOPOP);

        //从后台获取信息,重新创建图像界面
        sendJINHUA_MGR_USER_INFO(profile_user.getSelfUserID());
    }
};
