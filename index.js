'use strict';

const requireHandler = {
	get: function(target, name) {
		if (typeof target.modules[name] !== 'string') {
			throw new TypeError(`Unknown module key requested: ${name}`);
		}

		return target.requireFn(target.modules[name]);
	},
};

/**
 * ES6 Proxy for delayed require.
 *
 * @param {!cb} requireFn - Function used to actually perform the require.
 * @param {!Object} modules - Modules to be loaded on demand by requireFn.
 */
module.exports = function requireLater(requireFn, modules) {
	return new Proxy({modules, requireFn}, requireHandler);
};
