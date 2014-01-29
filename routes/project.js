exports.viewProject = function(req, res) {
	var name = req.params.name;
	console.log("project name is: " + name);
  	res.render('project', {
  		'projectName': name
  	});
};