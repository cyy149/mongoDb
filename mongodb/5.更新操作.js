const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017/scholl";

MongoClient.connect(url,(err,db) => {
	if (err) throw err;
	//先获取集合
	const student = db.collection('student');
	//更新单个文档
	// student.update({age : {$lte : 10}},{$inc : {age : 100}},(err,res) => {
	// 	if (err) throw err;
	// 	console.log(res)
	// });
	//批量更新文档
	student.updateMany({age : {$lte : 10}},{$inc : {age : 100}},(err,res) => {
		if (err) throw err;
		console.log(res)
	});
});
