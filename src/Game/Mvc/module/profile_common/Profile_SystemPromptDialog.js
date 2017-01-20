var Profile_SystemPromptDialog= {
    curMsg:null,
    setCurMsg:function(msg){
        this.curMsg= msg== undefined?null:msg;
    },
    getCurMsg:function(){
        return this.curMsg;
    }
};
