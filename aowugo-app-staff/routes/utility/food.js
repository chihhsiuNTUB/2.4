'use strict';

//引用操作資料庫的物件
const sql = require('./asyncDB');

//------------------------------------------
//執行資料庫動作的函式-傳回所有產品資料
//------------------------------------------
var list = async function(){
    var result=[];

<<<<<<< HEAD
    //console.log("查詢菜單");
    await sql('SELECT * FROM food ORDER BY foodID')
        .then((data) => {            
            result = data.rows;
            //console.log(result)  ;
        }, (error) => {
            result = null;
            //console.log("除去錯誤")  ;
=======
    console.log("查詢菜單");
    await sql('SELECT * FROM food ORDER BY foodID')
        .then((data) => {            
            result = data.rows;
            console.log(result)  ;
        }, (error) => {
            result = null;
            console.log("除去錯誤")  ;
>>>>>>> viewdata-staffversion
        });
		
    return result;
}

module.exports = {list}