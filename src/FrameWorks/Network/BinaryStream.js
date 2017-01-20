//Int类型的最大取值范围(2~32- 1)
const INT_RANGE = 4294967295;

//数据类型
if(typeof g_DataType== "undefined"){
    var g_DataType= {
        Byte:0,//Byte
        Short:1,//Short
        Int:2,//Int类型
        Long:3,//Long类型
        UTF16:4//UTF16类型
    };
}

!function (entrance) {
    "use strict";
    if ("object" === typeof exports && "undefined" !== typeof module) {
        module.exports = entrance();
    } else if ("function" === typeof define && define.amd) {
        define([], entrance());
    } else {
        var f;
        if ("undefined" !== typeof window) {
            f = window;
        } else {
            throw new Error('wrong execution environment');
        }
        f.BinaryStream = entrance();
    }
}(function () {
    var binaryPot = {
        /**
         * 初始化字节流,把-128至128的区间改为0-256的区间.便于计算
         * @param {Array} array 字节流数组
         * @return {Array} 转化好的字节流数组
         */
        init: function (array) {
            for (var i = 0; i < array.length; i++) {
                array[i] *= 1;
                if (array[i] < 0) {
                    array[i] += 256
                }
                if(array[i]>255){
                    throw new Error('不合法字节流')
                }
            }
            return array;
        },
        /**
         * 把一段字符串按照utf8编码写到缓冲区中
         * @param {String} str 将要写入缓冲区的字符串
         * @param {Boolean} isGetBytes 是否只得到内容字节(不包括最开始的两位占位字节)
         * @returns {Array} 字节流
         */
        writeUTF: function (str, isGetBytes) {
            var back = [],
                byteSize = 0;
            for (var i = 0; i < str.length; i++) {
                var code = str.charCodeAt(i);
                if (code >= 0 && code <= 127) {
                    byteSize += 1;
                    back.push(code);
                } else if (code >= 128 && code <= 2047) {
                    byteSize += 2;
                    back.push((192 | (31 & (code >> 6))));
                    back.push((128 | (63 & code)))
                } else if (code >= 2048 && code <= 65535) {
                    byteSize += 3;
                    back.push((224 | (15 & (code >> 12))));
                    back.push((128 | (63 & (code >> 6))));
                    back.push((128 | (63 & code)))
                }
            }
            for (i = 0; i < back.length; i++) {
                if (back[i] > 255) {
                    back[i] &= 255
                }
            }
            if (isGetBytes) {
                return back
            }
            if (byteSize <= 255) {
                return [0, byteSize].concat(back);
            } else {
                return [byteSize >> 8, byteSize & 255].concat(back);
            }
        },
        /**
         * 转换成Stream对象
         * @param x
         * @returns {Stream}
         */
        convertStream: function (x) {
            if (x instanceof Stream) {
                return x
            } else {
                return new Stream(x)
            }
        }
    };
    var supportArrayBuffer = (function () {
        return !!window.ArrayBuffer;
    })();
    /**
     * 字节流处理实体类
     * @param {String|Array} array 初始化字节流,如果是字符串则按照UTF8的格式写入缓冲区
     * @constructor
     */
    function Stream(array) {
        if (!(this instanceof Stream)) {
            return new Stream(array);
        }
        /**
         * 字节流缓冲区
         * @type {Array}
         */
        this.pool = [];
        this.arrayBuffer= null;

        if (Object.prototype.toString.call(array) === '[object Array]') {
            this.pool = binaryPot.init(array);
        } else if (Object.prototype.toString.call(array) == "[object ArrayBuffer]") {
            //注意Little-Endian读取后的数组
            var arr = new Uint8Array(array);
            this.pool = binaryPot.init([].slice.call(arr));
            this.arrayBuffer= array;
        } else if (typeof array === 'string') {
            this.pool = binaryPot.writeUTF(array);
        }
        var self = this;
        //当前流执行的起始位置(读)
        this.readPos = 0;
        //当前流写入的多少字节(写)
        this.writenPos = 0;
        //返回当前流执行的起始位置是否已经大于整个流的长度
        this.check = function () {
            return self.readPos >= self.pool.length
        };
    }
    /**
     * 强制转换为Stream对象
     * @param x
     * @returns {*|Stream}
     */
    Stream.parse = function (x) {
        return binaryPot.convertStream(x);
    };
    Stream.prototype = {
        /**
         * Func:获取读取位置
         */
        getReadPos:function(){
            return this.readPos;
        },
        /**
         * Func:设置读取位置
         * @param pos
         */
        setReadPos:function(pos){
            this.readPos= ((pos== undefined)?this.readPos:pos);
        },
        /**
         * 从缓冲区读取4个字节的长度并转换为int值,position往后移4位
         * @returns {Number} 读取到的数字
         * @description 如果position大于等于缓冲区的长度则返回-1
         */
        readInt: function () {
            if (this.check()) {
                return -1
            }
            var end = 0;
            for (var i = 0; i < 4; i++) {
                var value= this.pool[this.readPos];
                end+= value* Math.pow(256, 3-i);
                this.readPos++;
            }
            return end;
        },
        /**
         * 从缓冲区读取4个字节的长度并转换为int值,position往后移4位【仅限于读取消息ID】
         * @returns {Number} 读取到的数字
         * @description 如果position大于等于缓冲区的长度则返回-1
         */
        readIntByString: function () {
            if (this.check()) {
                return -1
            }
            var end = "";
            for (var i = 0; i < 4; i++) {
                //使用toString(16)，会将(01或者0e)等值，直接转换为1、e，去除了0,
                var value= this.pool[this.readPos].toString(16);
                value= (((value.length)== 1)?('0'+value):value);
                end += value;
                this.readPos++;
            }
            return end;
        },
        /**
         * 从缓冲区读取2个字节的长度并转换为short值,position往后移2位
         * @returns {Number} 读取到的数字
         * @description 如果position大于等于缓冲区的长度则返回-1
         */
        readShort: function () {
            if (this.check()) {
                return -1
            }
            var end = 0;
            for (var i = 0; i < 2; i++) {
                var value= this.pool[this.readPos];
                end+= value* Math.pow(256, 1-i);
                this.readPos++;
            }
            return end;
        },
        /**
         * 从缓冲区读取8个字节的长度并转换为Long值,position往后移8位
         * @returns {Number} 读取到的数字
         * @description 如果position大于等于缓冲区的长度则返回-1
         */
        readLong: function () {
            if (this.check()) {
                return -1
            }
            var end = 0;
            for (var i = 0; i < 8; i++) {
                var value= this.pool[this.readPos];
                end+= value* Math.pow(256, 7-i);
                this.readPos++;
            }
            return end;
        },
        /**
         * 从缓冲区读取1个字节,position往后移1位
         * @returns {Number}
         * @description 如果position大于等于缓冲区的长度则返回-1
         */
        readByte: function () {
            if (this.check()) {
                return -1
            }
            var val = this.pool[this.readPos++];
            if (val > 255) {
                val &= 255;
            }
            return val;
        },
        /**
         * 方法二:使用Unit16Array方法-中文(大端字节-FE FF)
         * 从缓冲区的position位置按UTF8的格式读取字符串,position往后移指定的长度
         * @returns {String} 读取的字符串
         */
        readUTF16: function (len) {
            //其中，2个是后台传递前台时，多传了两个字符串结束符(EOF)
            //BOM =  FE FF(65279)
            //小端字节和大端字节的转换，EOF放在字节流的前面
            //将arrayBuffer按照DataView视图读取方式读取
            var binary= new Uint16Array(this.arrayBuffer.slice(this.readPos+ 2, this.readPos+ len));
            this.readPos+= len;
            return this.binaryArrayToStringByUTFT6(binary);
        },
        /**
         * 方法二:使用Unit16Array方法-中文(大端字节-FE FF)
         * 从缓冲区的position位置按UTF8的格式读取字符串,position往后移指定的长度
         * @returns {String} 读取的字符串
         */
        readUTF8: function (len) {
            //其中，2个是后台传递前台时，多传了两个字符串结束符(EOF)
            //BOM =  FE FF(65279)
            //小端字节和大端字节的转换，EOF放在字节流的前面
            //将arrayBuffer按照DataView视图读取方式读取
            var binary= new Uint8Array(this.arrayBuffer.slice(this.readPos, this.readPos+ len- 1));
            this.readPos+= len;
            return this.binaryArrayToStringByUnicode(binary);
        },
        /**
         * 方法二:使用Unit8Array方法-中文(Unicode编码——小端字节 FF FE)
         * 从缓冲区的position位置按UTF8的格式读取字符串,position往后移指定的长度
         * @returns {String} 读取的字符串
         */
        readUnicode: function (len) {
            //其中，2个是后台传递前台时，多传了两个字符串结束符(EOF)
            //BOM =  FF FE(65534)
            //小端字节和大端字节的转换，EOF放在字节流的前面
            //将arrayBuffer按照DataView视图读取方式读取
            var binary= new Uint8Array(this.arrayBuffer.slice(this.readPos+ 2, this.readPos+ len));
            this.readPos+= len;
            return this.binaryArrayToStringByUnicode(binary);
        },
        /*
         func:二进制数组转换为字符串
        */
        binaryArrayToStringByUTFT6:function(binaryArray){
            var str = "";
            for (var i = 0; i < binaryArray.length; i++) {
                if (binaryArray[i] != 0)
                {
                    var hexChar = "0x" + binaryArray[i].toString("16").toUpperCase();
                    str += String.fromCharCode(hexChar);
                }
            }
            return str;
        },
        /*
         func:二进制数组转换为字符串(Unicode)
         */
        binaryArrayToStringByUnicode:function(binaryArray){
            var str = "";
            var temp= "";
            for (var i = 0; i < binaryArray.length; ++i) {
                if(i%2== 0){
                    temp= "0x";
                }
                if (binaryArray[i] != 0){
                    var hexChar = binaryArray[i].toString("16").toUpperCase();
                    hexChar= hexChar.length==2?hexChar:"0"+hexChar;
//                    console.log(binaryArray[i]+" "+binaryArray[i].toString("16").toUpperCase());
                    temp+= hexChar;
                }else{
                    temp+= "00";
                }
//                console.log(temp);
                if(i%2== 1){
                    if(temp.length== 6){//两个字节 占用4位 再加上"0x"
                        str+= String.fromCharCode(temp);
                    }else{
                        console.warn("读取Unicode时,其长度不为6！");
                    }
                }
            }
            return str;
        },
        /**
         * 把字符串按照UTF16的格式写入缓冲区,writen往后移指定的位
         * @param {String} str 字符串
         * @return {Array} 缓冲区
         */
        writeString: function (str) {
            //是否预留了消息长度(Short类型)
            if(this.writenPos<= 1){
                this.writeShort(0);
            }
            //Short字符串长度(2个字节)
            //FFFE Bom(2个字节)
            var length= str.length* 2+ 2+ 2;// 2 bytes for each char

            var buf = new ArrayBuffer(length);
            var x= new DataView(buf);

            //Short类型传递长度
            x.setInt16(0, str.length* 2+ 2);

            //添加Bom(FFFE = 65534)
            x.setInt16(2, 65534);

            var bufView = new Uint16Array(buf, 4);
            for (var i=0; i< str.length; i++) {
                bufView[i] = str.charCodeAt(i);
            }

            this.copyBufferToArray(buf);

            this.writenPos += (length);
        },
        //Byte类型
        writeByte: function (value) {
            //是否预留了消息长度(Short类型)
            if(this.writenPos<= 1){
                this.writeShort(0);
            }
            var buf = new ArrayBuffer(1); // 2 bytes for each char
            var x= new DataView(buf);

            //Short类型
            x.setInt8(0, value);

            this.copyBufferToArray(buf);

            this.writenPos += 1;
        },
        //Short类型
        writeShort: function (value) {
            var buf = new ArrayBuffer(2); // 2 bytes for each char
            var x= new DataView(buf);

            //Short类型
            x.setInt16(0, value);

            this.copyBufferToArray(buf);

            this.writenPos += 2;
        },
        //Int类型
        writeInt: function (value) {
            //是否预留了消息长度(Short类型)
            if(this.writenPos<= 1){
                this.writeShort(0);
            }
            var buf = new ArrayBuffer(4); // 4 bytes for each char
            var x= new DataView(buf);

            //Short类型
            x.setInt32(0, value);

            this.copyBufferToArray(buf);

            this.writenPos += 4;
        },
        //Long类型
        writeLong: function (value) {
            //是否预留了消息长度(Short类型)
            if(this.writenPos<= 1){
                this.writeShort(0);
            }
            var buf = new ArrayBuffer(8); // 8 bytes for each char
            var x= new DataView(buf);
            if(value<= INT_RANGE){
                x.setInt32(0, 0);
                x.setInt32(4, value);
            }else{
                x.setInt32(0, Math.floor(value/INT_RANGE));
                x.setInt32(4, Math.ceil(value%INT_RANGE));
            }

            this.copyBufferToArray(buf);

            this.writenPos += 8;
        },
        /**
         * 把缓冲区字节流的格式从0至256的区间改为-128至128的区间
         * @returns {Array} 转换后的字节流
         */
        toComplements: function () {
            var _tPool = this.pool;
            for (var i = 0; i < _tPool.length; i++) {
                if (_tPool[i] > 128) {
                    _tPool[i] -= 256;
                }
            }
            return _tPool;
        },
        /**
         * 获取整个缓冲区的字节
         * @param {Boolean} isCom 是否转换字节流区间
         * @returns {Array} 转换后的缓冲区
         */
        getBytesArray: function (isCom) {
            if (isCom) {
                return this.toComplements()
            }
            return this.pool;
        },
        /**
         * 把缓冲区的字节流转换为ArrayBuffer
         * @returns {ArrayBuffer}
         * @throw {Error} 不支持ArrayBuffer
         */
        toArrayBuffer: function () {
            if (supportArrayBuffer) {
                var buffer= this.arrayToArrayBuffer();
                //自动设置消息的长度
                this.setMsgLength(buffer);
                return buffer;
            } else {
                throw new Error('not support arraybuffer');
            }
        },
        //Array-->ArrayBuffer
        arrayToArrayBuffer:function(){
            var buffer= new ArrayBuffer(this.getBytesArray().length);
            for(var i=0; i< buffer.byteLength; ++i){
                var x= new DataView(buffer, 0);
                x.setUint8(i, this.getBytesArray()[i]);
            }
            return buffer;
        },
        //设置消息的长度
        setMsgLength:function(buffer){
            var x= new DataView(buffer, 0);

            //Short类型传递长度
            x.setInt16(0, buffer.byteLength);
        },
        //拷贝制定的ArrayBuffer到Array中
        copyBufferToArray:function(buffer){
            var bufView= new Uint8Array(buffer);
            for (i=0; i< buffer.byteLength; i++) {
                this.pool.push(bufView[i]);
            }
        },
        clear: function () {
            this.pool = [];
            this.writenPos = this.readPos = 0;
        }
    };
    return Stream;
});