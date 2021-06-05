let { ObjectId } = require("mongodb");
const _ = require("lodash");
module.exports = function (ratings) {
  ratings.instituteAverage = function (instituteName, cb) {
    var connector = this.getConnector();
    var aggregate = {
      pipeline: [
        {
          $match: { instituteName: instituteName }
        },
        {'$group':{
            '_id': '$instituteName',
            'avgRating': {'$avg': '$ratings'}
        }}
      ],
    };
    try {
      var collection = connector.collection("ratings");
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
  ratings.remoteMethod("instituteAverage", {
    http: {
      path: "/instituteAverage",
      verb: "get",
      status: 200,
      errorStatus: 502,
      description: "Institute Average",
    },
    accepts: [{ arg: "instituteName", type: "string" }],
    returns: { arg: "data", type: "object", root: true },
  });
  ratings.instituteReviews = function (instituteName, cb) {
    var connector = this.getConnector();
    var aggregate = {
      pipeline: [
        {
          $match: { instituteName: instituteName }
        }
      
      ],
    };
    try {
      var collection = connector.collection("ratings");
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
  ratings.remoteMethod("instituteReviews", {
    http: {
      path: "/instituteReviews",
      verb: "get",
      status: 200,
      errorStatus: 502,
      description: "instituteReviews",
    },
    accepts: [{ arg: "instituteName", type: "string" }],
    returns: { arg: "data", type: "object", root: true },
  });
};
