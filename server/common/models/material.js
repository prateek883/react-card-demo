module.exports = function (material) {
  material.getInstituteMaterial = function (name, type, cb) {
     
    var connector = this.getConnector();
    var aggregate = {
      pipeline: [
        { $match: { $and: [{ instituteName: name }, { materialType: type }] } },

        {
          $lookup: {
            from: "institute",

            localField: "instituteName",

            foreignField: "instituteName",

            as: "institutes"
          }
        }
      ],
    };
    try {
      var collection = connector.collection("material");
      var cursor = collection.aggregate(aggregate.pipeline, {});
      return cursor.toArray(function (err, data) {
         
        return cb(null, data);
      });
    } catch (error) {
      cb(new Error(error));
    }
  };
  material.remoteMethod("getInstituteMaterial", {
    http: {
      path: "/getInstituteMaterial",
      verb: "get",
      status: 200,
      errorStatus: 502,
      description: "GET Institute Material",
    },
    accepts: [
      { arg: "name", type: "string" },
      { arg: "type", type: "string" },
    ],
    returns: { arg: "data", type: "object", root: true },
  });
};
