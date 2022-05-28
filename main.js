"use strict";
exports.__esModule = true;
var express_1 = require("express");
var app = (0, express_1["default"])();
var port = 3000;
app.post("notifications", function (request, response) {
    console.log("requet", request);
});
app.listen(port, function () {
    console.log("listening on port", port);
});
