//引入mongodb中的MongoClient
const MongoClient = require("mongodb").MongoClient;

//设置数据库的url
const url  = "mongodb://localhost:27017/scholl";

//连接
MongoClient.connect(url, (err,db) => {
	if (err) throw err;
	//db就是指当前数据库
	console.log("数据库连接成功");
	console.log(db);
	//进行各种crud操作

	//关闭数据库连接
	db.close();
});