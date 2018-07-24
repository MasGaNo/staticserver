"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app = express_1.default();
var CStaticServer = /** @class */ (function () {
    function CStaticServer() {
    }
    CStaticServer.prototype.useStatic = function (path, localPath) {
        if (!localPath) {
            app.use(express_1.default.static(path));
        }
        else {
            app.use(path, express_1.default.static(localPath));
        }
        return this;
    };
    CStaticServer.prototype.listen = function (port, domain, callback) {
        if (!callback && !!domain && domain instanceof Function) {
            callback = domain;
            domain = null;
        }
        var onListen = function () {
            if (!!callback) {
                callback();
            }
        };
        if (!!domain) {
            return app.listen(port, domain, onListen);
        }
        else {
            return app.listen(port, onListen);
        }
    };
    return CStaticServer;
}());
;
var StaticServer = new CStaticServer();
exports.default = StaticServer;
