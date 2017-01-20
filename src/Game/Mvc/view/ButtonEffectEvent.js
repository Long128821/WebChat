//AABBCCDD 一共8位，每两位数字表示一个动作类型集合.
//DD：代表按钮音效编号
//CC：代表按钮动画编号
//BB：预留
//AA：预留

//文档配置实例：
//(BUTTON_SOUND_CLICK + BUTTON_ANIMATION_ZOOM_IN)-- 202 --点击按钮：普通点击音效和放大动画
BUTTON_CLICK = ccui.Widget.TOUCH_ENDED;

SOUND_PREFIX = 1;//按钮前缀
ANIMATION_PREFIX = 100;//按钮前缀
PREFIX56 = 10000;//56前缀
PREFIX78 = 1000000;//78前缀

//-------------------------音效-------------------------
BUTTON_SOUND_NONE = SOUND_PREFIX * 1;//无点击音效
BUTTON_SOUND_CLICK = SOUND_PREFIX * 2;//普通点击音效
BUTTON_SOUND_BACK = SOUND_PREFIX * 3;//返回点击音效

//-------------------------动画-------------------------
BUTTON_ANIMATION_NONE = ANIMATION_PREFIX * 1;//无动画
BUTTON_ANIMATION_ZOOM_IN = ANIMATION_PREFIX * 2;//放大动画(抬起后动画播完执行回调)
BUTTON_ANIMATION_ZOOM_OUT = ANIMATION_PREFIX * 3;//缩小动画(抬起后动画播完执行回调)
BUTTON_ANIMATION_ZOOM_IN_UP_EXECUTE = ANIMATION_PREFIX * 4;//放大动画(抬起后立即执行回调)
BUTTON_ANIMATION_ZOOM_OUT_UP_EXECUTE = ANIMATION_PREFIX * 5;//缩小动画(抬起后立即执行回调)