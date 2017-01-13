var onRun = function(context) {
    var FRAMEWORK_NAME = "SketchRunner";
	try {
		SketchRunner.launchWithContext(context);
	} catch(e) {
		var pluginBundle = NSBundle.bundleWithURL(context.plugin.url()),
        	mocha = Mocha.sharedRuntime();
        if(mocha.loadFrameworkWithName_inDirectory(FRAMEWORK_NAME, pluginBundle.resourceURL().path())) {
			SketchRunner.launchWithContext(context);
        } else {        	
            print("Error while loading framework '"+FRAMEWORK_NAME+"`");
        }
	}
}