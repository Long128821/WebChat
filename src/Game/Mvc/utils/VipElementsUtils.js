var VipElementsUtils= {
    getVipBgFromVipLevel:function(vipLevel) {
        if (vipLevel == null) {
            return null
        }
        if (vipLevel == 0) {
            return "ic_vip_0.png"
        } else if (vipLevel == 1) {
            return "ic_vip_biaoqian_lv01.png";
        } else if (vipLevel == 2 || vipLevel == 3) {
            return "ic_vip_biaoqian_lv02.png";
        } else if (vipLevel == 4 || vipLevel == 5) {
            return "ic_vip_biaoqian_lv03.png";
        } else if (vipLevel == 6 || vipLevel == 7) {
            return "ic_vip_biaoqian_lv04.png";
        } else if (vipLevel == 8 || vipLevel == 9) {
            return "ic_vip_biaoqian_lv05.png";
        } else if (vipLevel > 9 && vipLevel <= 39) {
            return "ic_vip_biaoqian_lv06.png";
        } else if (vipLevel > 39 && vipLevel <= 159) {
            return "ic_vip_biaoqian_lv07.png";
        } else if (vipLevel > 159 && vipLevel <= 499) {
            return "ic_vip_biaoqian_lv08.png";
        } else if (vipLevel > 499 && vipLevel <= 1199) {
            return "ic_vip_biaoqian_lv09.png";
        } else if (vipLevel > 1199) {
            return "ic_vip_biaoqian_lv10.png";
        } else {
            return "ic_vip_0.png";
        }
    },
    //根据等级返回vip标志图片
    getVipHighSignFromVipLevel:function(vipLevel) {
        if (vipLevel == null || vipLevel <= 9) {
            return null;
        }
        if(vipLevel > 9 && vipLevel <= 19){
            return "ic_vip_jiaobiao_hongzuan.png";
        }else if(vipLevel > 19 && vipLevel <= 39){
            return "ic_vip_jiaobiao_huangzuan.png";
        }else if(vipLevel > 39 && vipLevel <= 79){
            return "ic_vip_jiaobiao_lanzuan.png";
        }else if(vipLevel > 79 && vipLevel <= 159){
            return "ic_vip_jiaobiao_zizuan.png";
        }else if(vipLevel > 159 && vipLevel <= 299){
            return "ic_vip_jiaobiao_tongguan.png";
        }else if(vipLevel > 299 && vipLevel <= 499){
            return "ic_vip_jiaobiao_yinguan.png";
        }else if(vipLevel > 499 && vipLevel <= 799){
            return "ic_vip_jiaobiao_jinguan.png";
        }else if(vipLevel > 799 && vipLevel <= 1199){
            return "ic_vip_jiaobiao_xingxing.png";
        }else if(vipLevel > 1199 && vipLevel <= 1699){
            return "ic_vip_jiaobiao_yuezhishen.png";
        }else if(vipLevel > 1699){
            return "ic_vip_jiaobiao_taiyangshen.png";
        }else{
            return "ic_vip_jiaobiao_hongzuan.png";
        }
    }
}