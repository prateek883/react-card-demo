let { ObjectId } = require("mongodb");

const _ = require("lodash");

module.exports = function (faculity) {
  faculity.instituteFaculity = function (name, cb) {
    var connector = this.getConnector();
    var aggregate = {
      pipeline: [
        {
          $match: { instituteName: name },
        },
      ],
    };
    try {
      var collection = connector.collection("faculity");
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
  faculity.remoteMethod("instituteFaculity", {
    http: {
      path: "/instituteFaculity",
      verb: "get",
      status: 200,
      errorStatus: 502,
      description: "Institute Faculity",
    },
    accepts: [{ arg: "name", type: "string" }],
    returns: { arg: "data", type: "object", root: true },
  });
};
