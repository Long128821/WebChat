var Profile_DailySalary= {
    DailySalaryInfoTable:null,//每日领工资信息table
    GetDailySalaryTable:null,//领取每日工资table
    getDailySalaryInfoTable:function(){
        return this.DailySalaryInfoTable;
    },
    setDailySalaryInfoTable:function(dataTable){
        this.DailySalaryInfoTable= dataTable== undefined?null:dataTable;
    },
    getGetDailySalaryTable:function(){
        return this.GetDailySalaryTable;
    },
    setGetDailySalaryTable:function(dataTable){
        this.GetDailySalaryTable= dataTable== undefined?null:dataTable;
    }
};
