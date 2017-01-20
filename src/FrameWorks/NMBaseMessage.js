function NMBaseMessage(arraybuffer){
    //设置消息
    this.setArrayBuffer= function(arrayBuffer){
        this.m_arrayBuffer=((arrayBuffer== undefined)?0:arrayBuffer);
    };

    //成员函数
    this.setMessageType= function(type){//设置消息类型
        this.m_type=((type== undefined)?0:type);
    };

    this.setMsgVer= function(ver){//设置消息版本号
        this.m_msgVer=((ver== undefined)?0:ver);
    };

    this.setExtData= function(extData){//设置预留字段
        this.m_extData=((extData== undefined)?0:extData);
    };

    //获取ArrayBuffer
    this.getArrayBuffer= function(){
        return this.m_arrayBuffer;
    };
    //获取消息ID
    this.getMsgType= function(){
        return this.m_type;
    };

    this.clear= function(){
        //数据成员
        this.m_binaryStream= null;//二进制数据
        this.m_type= 0;//消息ID(Int类型)
        this.m_arrayBuffer= ((arraybuffer== undefined)?null:arraybuffer);//消息ArrayBuffer
        this.m_extData= 0;//预留字段
        this.m_msgVer= 0;//消息版本
        this.m_userID= 0;//玩家ID
    };

    //开始读取
    this.readImpl= function(){
        this.m_binaryStream.readShort();//读取消息长度
        this.m_type= this.m_binaryStream.readIntByString();//消息ID
        this.m_extData= this.m_binaryStream.readByte();//预留字段
        this.m_msgVer= this.m_binaryStream.readByte();//消息版本
        this.m_userID= this.m_binaryStream.readInt();//UserID
    };

    //开始写消息
    this.writeStart= function(){
        //**************二进制数组传递方式****************/
        this.m_binaryStream= BinaryStream();
        this.m_binaryStream.writeShort(0);//消息长度[预留字段，最后发送的时候，会重新赋值]
        this.m_binaryStream.writeInt(this.m_type);//消息ID
        this.m_binaryStream.writeByte(this.m_extData);//预留字段
        this.m_binaryStream.writeByte(this.m_msgVer);//消息版本
        this.m_binaryStream.writeInt(this.m_userID);//UserID;
    };

    this.writeOver= function(){//写消息结束
        //转换为ArrayBuffer,同时在消息的头部设置长度
        this.m_arrayBuffer= this.m_binaryStream.toArrayBuffer();
        //回收空间
        this.m_binaryStream= null;
    };

    //开始写消息
    this.readStart= function(){
        //清空数据
        this.clear();
        //**************二进制数组传递方式****************/
        this.m_binaryStream= BinaryStream(this.m_arrayBuffer);
        this.readImpl();//读取消息头
    };

    //开始读取loop类型
    this.startReadLoop= function(){
        //console.log("Loop长度:"+ this.readShort());
        //读取Loop的长度
        this.readShort();
        this.m_binaryStream.readPos-= 2;
    };

    //监测数据是否为空
    //@DataType:数据类型
    //@Way:0-写入 1-读取
    this.checkBinaryStream= function(DataType, Way){
        if(this.m_binaryStream== null){
            console.error(((Way== 0)?"写入":"读取")+DataType+"类型数据失败:binaryStream为NULL。");
            return true;
        }else{
            return false;
        }
    };

    //Int类型
    this.writeInt= function(value){
        if(this.checkBinaryStream(g_DataType.Int, 0)){
            return 0;
        }
        this.m_binaryStream.writeInt(value);
    };

    //Byte类型
    this.writeByte= function(value){
        if(this.checkBinaryStream(g_DataType.Byte, 0)){
            return 0;
        }
        this.m_binaryStream.writeByte(value);
    };

    //Short类型
    this.writeShort= function(value){
        if(this.checkBinaryStream(g_DataType.Short, 0)){
            return 0;
        }
        this.m_binaryStream.writeShort(value);
    };

    //Long类型
    this.writeLong= function(value){
        if(this.checkBinaryStream(g_DataType.Long, 0)){
            return 0;
        }
        this.m_binaryStream.writeLong(value);
    };

    //UTF16类型
    this.writeString= function(value){
        if(this.checkBinaryStream(g_DataType.UTF16, 0)){
            return 0;
        }
        this.m_binaryStream.writeString(value.toString());
    };

    //Int类型
    this.readInt= function(){
        if(this.checkBinaryStream(g_DataType.Int, 1)){
            return 0;
        }
        return this.m_binaryStream.readInt();
    };

    //Byte类型
    this.readByte= function(){
        if(this.checkBinaryStream(g_DataType.Byte, 1)){
            return 0;
        }
        return this.m_binaryStream.readByte();
    };

    //Short类型
    this.readShort= function(){
        if(this.checkBinaryStream(g_DataType.Short, 1)){
            return 0;
        }
        var value= this.m_binaryStream.readShort();
        this.m_binaryStream.readPos+= 2;
        return value;
    };

    //Long类型
    this.readLong= function(){
        if(this.checkBinaryStream(g_DataType.Long, 1)){
            return 0;
        }
       return this.m_binaryStream.readLong();
    };
    //读取字符串
    this.readString= function(){
        var len= this.m_binaryStream.readShort();
        if(this.checkBinaryStream(g_DataType.UTF16, 1)||len== 0){
            return "";
        }
        //String 包括(Short类型的长度(2个字节， 因此+ 2))
        //读取BOM(占用两个字节),判断是UTF16，还是Unicode
        var arrayBuffer= this.m_binaryStream.arrayBuffer.slice(this.m_binaryStream.readPos, this.m_binaryStream.readPos+ 2);
        var BOM= new Uint16Array(arrayBuffer);

        if(BOM== 65279){//小端字节(String FE FF)
            return this.m_binaryStream.readUTF16(len);
        }else if(BOM== 65534){//大端字节(Unicode FF FE)
            return this.m_binaryStream.readUnicode(len);
        }else{
            console.warn("BOM的格式不对！Bom= "+ new Uint8Array(arrayBuffer).join("-"));
            var arrayBuffe= this.m_binaryStream.arrayBuffer.slice(0, -1);
            console.log(new Uint8Array(arrayBuffe).join("-"));
            return "ERROR";
        }
    }
} 