const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017/scholl";

MongoClient.connect(url,(err,db) => {
	if (err) throw err;
	//先获取集合
	const student = db.collection('student');
	//删除操作
	student.remove({age : {$gte : 30}},(err,res) => {
		if (err) throw err;
		console.log(res);
	});
});
