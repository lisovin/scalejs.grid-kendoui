﻿/*global define*/define([    'scalejs!core',    'knockout',    'knockout.mapping',    'jQuery',    'kendo.grid'], function (    core,    ko,    mapping,    $) {    'use strict';    var unwrap = ko.utils.unwrapObservable,
            var toolbarEl = $('#' + options.toolbar)[0];
            if (has(toolbarEl)) {
                options.toolbar = toolbarHtml;
            }
        }
        /*