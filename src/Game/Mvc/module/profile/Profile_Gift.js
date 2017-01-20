/**
 * Created by Administrator on 2016/12/22.
 */
var Profile_Gift={
    m_GiftData:null,//双核礼包
    m_GiftBagType:null,//用户礼包状态
    //获取双核礼包数据
    getGiftDataTable:function(){
        return (this.m_GiftData== undefined?0:this.m_GiftData);
    },
    setGiftDataTable:function(giftData){
        this.m_GiftData= giftData== undefined?null:giftData;
    },
    //获取礼包状态
    getGiftBagType:function(){
        return (this.m_GiftBagType== undefined?0:this.m_GiftBagType);
    },
    setGiftBagType:function(giftBagType){
        this.m_GiftBagType= giftBagType== undefined?null:giftBagType;
    },
    //推送双核礼包(GIFTBAGID_PUSH_DUAL_GIFTBAG)
    slot_GIFTBAGID_PUSH_DUAL_GIFTBAG:function(dataTable){
        Profile_Gift.m_GiftData= dataTable;
        console.log(Profile_Gift.m_GiftData);
    },
    //用户礼包状态
    slot_GIFTBAGID_GET_GIFTBAG_MSG:function(dataTable){
        Profile_Gift.m_GiftBagType = dataTable["GiftBagData"];
//Todo:本地存储
//        //获取用户礼包
//        for(var i=0; i< dataTable["GiftBagCnt"]; ++i){
//            //…GiftBagType  礼包类别ID
//            //…IsPayGift  是否可以购买此类礼包
//            saveGiftBagType(this.GiftBagType[i].GiftBagType, this.GiftBagType[i].IsPayGift)
//        }
        profile_user.setMNRemainCount(dataTable["RemainCount"]);
    },
    GIFTBAGID_GIFTBAG_LIST_SIMPLETable:null,
    //用户可购买礼包列表(精简)(GIFTBAGID_GIFTBAG_LIST_SIMPLE)
    slot_GIFTBAGID_GIFTBAG_LIST_SIMPLE:function(dataTable){
        if(dataTable== undefined) return;
        GIFTBAGID_GIFTBAG_LIST_SIMPLE= dataTable;
    },
    getGIFTBAGID_GIFTBAG_LIST_SIMPLE:function(){
        return this.GIFTBAGID_GIFTBAG_LIST_SIMPLETable;
    }
};

Frameworks.addSlot2Signal(GIFTBAGID_PUSH_DUAL_GIFTBAG, Profile_Gift.slot_GIFTBAGID_PUSH_DUAL_GIFTBAG);//获取推送礼包
Frameworks.addSlot2Signal(GIFTBAGID_GET_GIFTBAG_MSG, Profile_Gift.slot_GIFTBAGID_GET_GIFTBAG_MSG);//用户礼包状态
Frameworks.addSlot2Signal(GIFTBAGID_GIFTBAG_LIST_SIMPLE, Profile_Gift.slot_GIFTBAGID_GIFTBAG_LIST_SIMPLE);//用户可购买礼包列表(精简)

//Todo:刷新礼包