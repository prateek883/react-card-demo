'use strict';
const _ = require("lodash");
module.exports = function (Blog) {
    Blog.getSelected = function (cb) {
        var connector = this.getConnector();
        var aggregate = {
            pipeline: [
                {
                    $match: { selected: true },
                },
            ],
        };
        try {
            var collection = connector.collection("blog");
            var cursor = collection.aggregate(aggregate.pipeline, {});
            return cursor.toArray(function (err, data) {
                if(err) {
                    cb(new Error(err));
                } else {
                    cb(null,data);
                }
            });
        } catch (error) {
            cb(new Error(error));
        }
    };
    Blog.remoteMethod("getSelected", {
        http: {
            path: "/get-selected",
            verb: "get",
            status: 200,
            errorStatus: 502,
            description: "GET ACCEPTED USERS",
        },
        accepts: null,
        returns: { arg: "data", type: "object", root: true },
    });

    Blog.getNotSelected = function (cb) {
        var connector = this.getConnector();
        var aggregate = {
            pipeline: [
                {
                    $match: { selected: false },
                },
            ],
        };
        try {
            var collection = connector.collection("blog");
            var cursor = collection.aggregate(aggregate.pipeline, {});
            return cursor.toArray(function (err, data) {
                if(err) {
                    cb(new Error(err));
                } else {
                    cb(null,data);
                }
            });
        } catch (error) {
            cb(new Error(error));
        }
    };
    Blog.remoteMethod("getNotSelected", {
        http: {
            path: "/get-not-selected",
            verb: "get",
            status: 200,
            errorStatus: 502,
            description: "GET ACCEPTED USERS",
        },
        accepts: null,
        returns: { arg: "data", type: ["object"], root: true },
    });
};
