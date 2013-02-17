/*global module:true*/
// steps
var paranormalStepDefinitions = function() {


	this.Given( /^I have 'PhantomJS' on 'Desktop'$/, function( callback ) {
		callback.pending();
	});


	this.When( /^I open the test page$/, function( callback ) {
		callback.pending();
	});


	this.Then( /^I should see '(.*?)' as the page title$/, function( title, callback ) {
		callback.pending();
	});

};

module.exports = paranormalStepDefinitions;
