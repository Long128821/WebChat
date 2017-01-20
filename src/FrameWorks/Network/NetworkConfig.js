var URLList= [
//    "10.10.0.120:65002",
    "10.10.0.119:65031",
    "10.10.0.66:65031"
];

//当前
var NetworkConfig= {
    URL:"",//webSocket连接地址
    IP:"",//当前连接的IP地址
    Port:"",//端口号
    curUrlID:0,//当前URL的下标
    getCurPort:function(){
        return this.Port;
    },
    setCurPort:function(port){
        this.Port= port;
    },
    getCurIP:function(){
        return this.IP;
    },
    setCurIP:function(ip){
        this.IP= ip;
        this.URL= this.IP+":"+this.Port;
    },
    getCurUrlID:function(){
        return this.curUrlID;
    },
    setCurUrlID:function(urlID){
        this.curUrlID= urlID;
        this.setCurURL(URLList[urlID]);
    },
    getCurURL:function(){
        return this.URL;
    },
    setCurURL:function(URL){
        this.URL= URL;
        this.IP= URL.substring(0,URL.indexOf(":"));
        this.Port= URL.substring(URL.indexOf(":")+ 1, URL.length);
    }
};

//默认为第一个IP地址
NetworkConfig.setCurUrlID(0);