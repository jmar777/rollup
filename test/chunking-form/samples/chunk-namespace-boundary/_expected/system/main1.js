System.register(['./chunk-48ba2574.js'], function (exports, module) {
	'use strict';
	var commonjsGlobal, d;
	return {
		setters: [function (module) {
			commonjsGlobal = module.a;
			d = module.b;
		}],
		execute: function () {

			commonjsGlobal.fn = d => d + 1;
			var cjs = commonjsGlobal.fn;

			var main1 = exports('default', d.map(cjs));

		}
	};
});
