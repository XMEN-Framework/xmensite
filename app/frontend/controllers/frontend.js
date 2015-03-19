/**
 * Frontend Controller
 */
"use strict";


/**
 * Render Home page
 */
exports.home = function( req, res ) {
    res.render('home');
};

/**
 * Render documentation page
 */
exports.documentation = function( req, res ) {
    res.render('documentation');
};
