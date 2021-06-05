module.exports = function (exam) {
  // GET EXAMS
  exam.getExams = function (cb) {
    var connector = this.getConnector();
    var aggregate = {
      pipeline: [
        {
          $group: {
            _id: "$examName",
          },
        },
      ],
    };
    try {
      var collection = connector.collection("exam");
      var cursor = collection.aggregate(aggregate.pipeline, {});
      return cursor.toArray(function (err, data) {
        return cb(null, data);
      });
    } catch (error) {
      cb(new Error(error));
    }
  };
  exam.remoteMethod("getExams", {
    http: {
      path: "/getExams",
      verb: "get",
      status: 200,
      errorStatus: 502,
      description: "GET EXAMS LIST",
    },
    accepts: [],
    returns: { arg: "data", type: "object", root: true },
  });

  exam.getExamCities = function (examName, flag, cb) {
    var connector = this.getConnector();
    var aggregate = {
      pipeline: [
        { $match: { $and: [{ examName: examName }, { isOnline: flag }]}},
        {
          $lookup: {
            from: "institute",
            localField: "instituteName",
            foreignField: "instituteName",
            as: "institutes",
          }
        }
      ]
    };
    try {
      var collection = connector.collection("exam");
      var cursor = collection.aggregate(aggregate.pipeline, {});
      return cursor.toArray(function (err, data) {
        return cb(null, data);
      });
    } catch (error) {
      cb(new Error(error));
    }
  };
  exam.remoteMethod("getExamCities", {
    http: {
      path: "/getExamCities",
      verb: "get",
      status: 200,
      errorStatus: 502,
      description: "getExamCities",
    },
    accepts: [{ arg: "examName", type: "string" }, {arg: "flag", type: "boolean" }],
    returns: { arg: "data", type: "object", root: true },
  });
};
