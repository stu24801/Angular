(function (global) {
    System.config({
    	
    	paths: {
            "npm:": "node_modules/"
        },
        map: {
            "app": "app",
            "@angular/core": "npm:@angular/core/bundles/core.umd.js",
            "@angular/common": "npm:@angular/common/bundles/common.umd.js",
            "@angular/compiler": "npm:@angular/compiler/bundles/compiler.umd.js",
            "@angular/platform-browser": "npm:@angular/platform-browser/bundles/platform-browser.umd.js",
            "@angular/platform-browser-dynamic": "npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js",
            "@angular/http": "npm:@angular/http/bundles/http.umd.js",
            "@angular/router": "npm:@angular/router/bundles/router.umd.js",
            "@angular/forms": "npm:@angular/forms/bundles/forms.umd.js",
            "rxjs": "npm:rxjs",
            '@angular/animations': 'npm:@angular/animations/bundles/animations.umd.js',

            '@angular/material': 'npm:@angular/material/bundles/material.umd.js',

            // CDK individual packages
            '@angular/cdk/platform': 'npm:@angular/cdk/bundles/cdk-platform.umd.js',
            '@angular/cdk/a11y': 'npm:@angular/cdk/bundles/cdk-a11y.umd.js',
            'ng2-file-upload':'npm:ng2-file-upload'
        },
        packageConfigPaths: ['package.json'],
        packages: {
            app: {
            	main:'./js/app/main/main.js',
                defaultExtension: "js"
            },
            rxjs: {
                defaultExtension: "js"
            },
            'ng2-file-upload': {    
                main: 'index.js',    
                defaultExtension: 'js'
            }
            
        }
    });
})(this);