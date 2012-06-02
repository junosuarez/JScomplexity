define(['lodash','text!../template/hello.txt'], function (_, template) {
		
	return _.template(template);

});