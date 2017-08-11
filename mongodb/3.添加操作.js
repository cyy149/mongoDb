const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017/scholl";

MongoClient.connect(url,(err,db) => {
	if (err) throw err;
	//先获取集合
	const student = db.collection('student');
	//单条插入操作
	// student.insert({name : 'mongo',age : 8},(err,res) => {
	// 	if (err) throw err;
	// 	console.log(res);
	// });
	//多条插入
	student.insertMany([{name : 'vue',age : 3},{name : "react", age : 4}],(err,res) => {
		if (err) throw err;
		console.log(res);
	});
});
