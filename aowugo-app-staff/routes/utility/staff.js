'use strict';

//引用操作資料庫的物件
const sql = require('./asyncDB');

//------------------------------------------
//執行資料庫動作的函式-傳回所有產品資料
//------------------------------------------
var list = async function(){
    var result="";

    //console.log("查詢菜單");
    await sql('SELECT * FROM staff')
        .then((data) => {            
            result = data.rows;
<<<<<<< HEAD
            //console.log(result)  ;
=======
            console.log(result)  ;
>>>>>>> viewdata-staffversion
        }, (error) => {
            result = null;
            //console.log("除去錯誤")  ;
        });
		
    return result;
}

<<<<<<< HEAD
//------------------------------------------
//執行資料庫動作的函式-新增員工資料
//------------------------------------------
var add = async function(newData){
    var result;

    await sql('INSERT INTO staff (userName, staffPhone, nickName, password) VALUES ($1, $2, $3, $4)', [newData.userName, newData.staffPhone, newData.nickName, newData.password])
        .then((data) => {
            result = 0;  
        }, (error) => {
            result = -1;
        });
		
    return result;
}
//----------------------------------
// 刪除商品
//----------------------------------
var remove = async function(userName){
    var result;

    await sql('DELETE FROM staff WHERE userName = $1', [userName])
        .then((data) => {
            result = data.rowCount;  
        }, (error) => {
            result = -1;
        });
		
    return result;
}
//------------------------------------------
//執行資料庫動作的函式-取出單一商品
//------------------------------------------
var query = async function(userName){
    var result={};
    
    await sql('SELECT * FROM staff WHERE userName = $1', [userName])
        .then((data) => {
            if(data.rows.length > 0){
                result = data.rows[0];   
            }else{
                result = -1;
            }    
        }, (error) => {
            result = null;
        });
		
    return result;
}

//----------------------------------
// 更新商品
//----------------------------------
var update = async function(newData){
    var results;

    await sql('UPDATE staff SET staffPhone=$1, nickName=$2, password=$3 WHERE userName = $4', [newData.userName, newData.staffPhone, newData.nickName, newData.password])
        .then((data) => {
            results = data.rowCount;  
        }, (error) => {
            results = -1;
        });
		
    return results;
}
module.exports = {list, add, remove, query, update}
=======
module.exports = {list}
>>>>>>> viewdata-staffversion