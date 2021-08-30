"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var uuidv4 = require('uuid').v4;
var md5 = require("blueimp-md5");
var logTracer = /** @class */ (function () {
    function logTracer() {
    }
    logTracer.prototype.createTraceId = function () {
        var uid = uuidv4();
        var timestamp = new Date().valueOf();
        var md5uid = md5(timestamp + " + " + uid + " + traceId");
        return md5uid;
    };
    logTracer.prototype.createSpanId = function () {
        var uid = uuidv4();
        var timestamp = new Date().valueOf();
        var md5uid = md5(timestamp + " + " + uid + " + spanId");
        return md5uid;
    };
    return logTracer;
}());
var instanceTracer = new logTracer();
exports.default = instanceTracer;
