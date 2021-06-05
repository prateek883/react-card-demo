let { ObjectId } = require("mongodb");

const _ = require("lodash");

module.exports = function (toppers) {
    toppers.instituteToppers = function (name, cb) {
    var connector = this.getConnector();
    var aggregate = {
      pipeline: [
        {
          $match: { instituteName: name },
        },
      ],
    };
    try {
      var collection = connector.collection("toppers");
      var cursor = collection.aggregate(aggregate.pipeline, {});
      return cursor.toArray(function (err, data) {
        if (data.length) {
            return cb(null, data);
        } else {
          return cb(null, []);
        }
      });
    } catch (error) {
      cb(new Error(error));
    }
  };
  toppers.remoteMethod("instituteToppers", {
    http: {
      path: "/instituteToppers",
      verb: "get",
      status: 200,
      errorStatus: 502,
      description: "Institute Toppers",
    },
    accepts: [{ arg: "name", type: "string" }],
    returns: { arg: "data", type: "object", root: true },
  });
};
