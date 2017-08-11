const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017/scholl";


MongoClient.connect(url,(err,db) => {
	if (err) throw err;
	//可以进行操作了
	//先获取集合
	const student = db.collection('student');
	//在studnet集合进行find操作
	// student.find({},{_id : 0}).toArray( (err,res) => {
	// 	if (err) throw err;
	// 	console.log(res);
	// });
	//查询单个文档
	student.findOne({},{_id : 0},(err,res) => {
		if (err) throw err;
		console.log(res); 
	});
});