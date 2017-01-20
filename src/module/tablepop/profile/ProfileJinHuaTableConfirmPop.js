//数据图标集
var TableConfirmPopTag= {
    TAG_QUIT:1,
    TAG_STANDUP:2,
    TAG_NOPK:3,
    TAG_FOLD_TIPS:5,//第6轮点击"放弃"会提示
    TAG_CHANGE_TABLE_TIPS:6//第6轮点击"换桌"会提示
};
var ProfileJinHuaTableConfirmPop= {
    msg:"",
    tag:0,
    setMsg:function(tag){
        this.tag= tag;
        switch (tag){
            case TableConfirmPopTag.TAG_QUIT:
                this.msg= "退出后，您将离开房间，且已下注金币无法收回，确定吗？";
                break;
            case TableConfirmPopTag.TAG_STANDUP:
                this.msg= "站起后，您将进入旁观状态，且已下注金币无法收回，确定吗？";
                break;
            case TableConfirmPopTag.TAG_NOPK:
                this.msg= "使用【禁比】后，本局其它人不能和你比牌，确定使用吗？";
                break;
            case TableConfirmPopTag.TAG_FOLD_TIPS:
                this.msg= "您确定要弃牌吗？";
                break;
            case TableConfirmPopTag.TAG_CHANGE_TABLE_TIPS:
                this.msg= "您确定换桌吗？";
                break;
        }
    }
};
