/*global define*/
define([
    'scalejs.grid-kendoui/grid',
    'jQuery',
    'knockout',
    'knockout.mapping'
], function (
    kendoGrid,
    $,
    ko
) {
    'use strict';

    $('head').prepend('<link rel="stylesheet" type="text/css" href="css/kendo.common.min.css"></link>');
    $('head').prepend('<link rel="stylesheet" type="text/css" href="css/kendo.default.min.css"></link>');

    ko.bindingHandlers.kendoGrid = kendoGrid;
});

