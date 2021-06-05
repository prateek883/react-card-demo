"use strict";
var { ObjectId } = require("mongodb");
const shortid = require("shortid");
const _ = require("lodash");
module.exports = function (institute) {
  //   institute.observe("before save", function sendSignUo(ctx, next) {
  //     if (ctx.isNewInstance) {

  // //// Add node mailer

  //     } else {
  //       next();
  //     }
  //   });

  //
  institute.getUserInstitutes = function (role, email, cb) {
    var connector = this.getConnector();
    var aggregate = {
      pipeline: [
        {
          $match: { $and: [{ "users.role": role }, { "users.email": email }] },
        },

        {
          $project: {
            users: 0,
          },
        },
      ],
    };
    try {
      var collection = connector.collection("institute");
      var cursor = collection.aggregate(aggregate.pipeline, {});
      return cursor.toArray(function (err, data) {
        if (data.length) {
          _.forEach(data, function (result) {
            return cb(null, result);
          });
        } else {
          return cb(null, []);
        }
      });
    } catch (error) {
      cb(new Error(error));
    }
  };
  institute.remoteMethod("getUserInstitutes", {
    http: {
      path: "/getUserInstitutes",
      verb: "post",
      status: 200,
      errorStatus: 502,
      description: "GET USER INSTITUTES",
    },
    accepts: [
      { arg: "role", type: "string" },
      { arg: "email", type: "string" },
    ],
    returns: { arg: "data", type: "object", root: true },
  });
  //
  institute.getCityInstitutes = function (city, cb) {
    var connector = this.getConnector();
    var aggregate = {
      pipeline: [
        { $match: { city: city } },
        {
          $lookup: {
            from: "exam",

            localField: "instituteName",

            foreignField: "instituteName",

            as: "Exams",
          },
        },
      ],
    };
    try {
      var collection = connector.collection("institute");
      var cursor = collection.aggregate(aggregate.pipeline, {});
      return cursor.toArray(function (err, data) {
        return cb(null, data);
      });
    } catch (error) {
      cb(new Error(error));
    }
  };
  institute.remoteMethod("getCityInstitutes", {
    http: {
      path: "/getCityInstitutes",
      verb: "post",
      status: 200,
      errorStatus: 502,
      description: "GET CITY INSTITUTES",
    },
    accepts: [{ arg: "city", type: "string" }],
    returns: { arg: "data", type: "object", root: true },
  });

  institute.getPopularExams = function (city, cb) {
    var connector = this.getConnector();
    var aggregate = {
      pipeline: [
        {
          $match: {
            $and: [{ city: city }, { "exam.subjects.isPopular": true }],
          },
        },
      ],
    };
    try {
      var collection = connector.collection("institute");
      var cursor = collection.aggregate(aggregate.pipeline, {});
      return cursor.toArray(function (err, data) {
        return cb(null, data);
      });
    } catch (error) {
      cb(new Error(error));
    }
  };
  institute.remoteMethod("getPopularExams", {
    http: {
      path: "/getPopularExams",
      verb: "get",
      status: 200,
      errorStatus: 502,
      description: "GET CITY INSTITUTES",
    },
    accepts: [{ arg: "city", type: "string" }],
    returns: { arg: "data", type: "object", root: true },
  });
  institute.getInstituteExams = function (name, cb) {
    var connector = this.getConnector();
    var aggregate = {
      pipeline: [
        { $match: { instituteName: name } },
        {
          $lookup: {
            from: "exam",

            localField: "instituteName",

            foreignField: "instituteName",

            as: "exams",
          },
        },
        { $unwind: "$exams" },

        {
          $lookup: {
            from: "coursePackage",

            localField: "exams.examName",

            foreignField: "examName",

            as: "courses",
          },
        },
        {
          $project: {
            isOnline: 0,
            instituteCode: 0,
            country: 0,
            state: 0,
            city: 0,
            "exams.courseType": 0,
            "exams.department": 0,
            "exams.description": 0,
            "exams.instituteName": 0,
          },
        },
      ],
    };
    try {
      var collection = connector.collection("institute");
      var cursor = collection.aggregate(aggregate.pipeline, {});
      return cursor.toArray(function (err, data) {
        return cb(null, data);
      });
    } catch (error) {
      cb(new Error(error));
    }
  };
  institute.remoteMethod("getInstituteExams", {
    http: {
      path: "/getInstituteExams",
      verb: "get",
      status: 200,
      errorStatus: 502,
      description: "GET CITY INSTITUTES",
    },
    accepts: [{ arg: "name", type: "string" }],
    returns: { arg: "data", type: "object", root: true },
  });

  institute.addCourse = function (data, cb) {
    institute.findById(data.id, function (err, result) {
      let subject = [];
      if (err) {
        cb(err);
      } else {
        let obj = {
          courseName: data.courseName,
          courseType: data.courseType,
          isPopular: data.isPopular,
          isOnline: data.isOnline,
          isActive: data.isActive,
          description: data.description,
          id: shortid.generate(),
          examName: data.examName,
          courseDuration: data.courseDuration,
          numOfClasses: data.numOfClasses,
          price: 0,
          finalPrice: 0,
          discount: 0,
          offerDiscount: 0,
          videoMaterial: [],
          studyMaterial: [],
          mockTest: [],
        };
        subject = result.subject;
        subject.push(obj);
        result.updateAttributes({ subject: subject }, function (err, res) {
          cb(null, res);
        });
      }
    });
  };
  institute.remoteMethod("addCourse", {
    http: {
      path: "/addCourse",
      verb: "post",
      status: 200,
      errorStatus: 502,
      description: "Add Course",
    },

    accepts: [{ arg: "data", type: "object", http: { source: "body" } }],
    returns: { arg: "data", type: "object", root: true },
  });
  // update subjects
  // institute.addSubjects = function (data, cb) {
  //   institute.findById(data.id, function (err, result) {
  //     let exam = [];
  //     if (err) {
  //       cb(err);
  //     } else {
  //       let obj = {
  //         examName: data.examName,
  //         isOnline: data.isOnline,
  //         isActive: data.isActive,
  //         description: data.description,
  //         id: shortid.generate(),
  //         videoMaterial: [],
  //         studyMaterial: [],
  //         mockTest: []
  //       };
  //       exam.push(obj);
  //       result.updateAttributes({ exam: exam }, function (err, res) {
  //         cb(null, res);
  //       });
  //     }
  //   });
  // };
  // institute.remoteMethod("addSubjects", {
  //   http: {
  //     path: "/addSubjects",
  //     verb: "post",
  //     status: 200,
  //     errorStatus: 502,
  //     description: "Add Subjects",
  //   },

  //  accepts: [{ arg: "data", type: "object", http: { source: "body" } }],
  // returns: { arg: "data", type: "object", root: true },
  // });

  institute.addVideoMaterial = function (data, cb) {
    institute.findById(data.id, function (err, items) {
      if (err) {
        cb(err);
      } else {
        let obj = {};
        let value = [];
        if (items.subject.length > 0) {
          value = items.subject.filter((e) => e.id == data.subjectId);
          //  for (let index = 0; index < items.subject.length; index++) {
          //  if (items.exam[index].id === data.examId) {
          obj = {
            isActive: true,
            courseName: data.courseName,
            url: data.url,
            previewUrl: data.previewUrl,
            price: data.price,
            id: shortid.generate(),
          };
          value[0].videoMaterial.push(obj);
          //    items.subject[index].videoMaterial.push(obj);

          // } else {
          //   cb(null, "No Exam Data found");
          // }
          //  }
          items.updateAttributes({ subject: items.subject }, function (
            err,
            res
          ) {
            if (err) {
              console.log("falied");
            } else {
              cb(null, res);
            }
          });
        } else {
          cb(null, "No Exams Found");
        }
      }
    });
  };
  institute.remoteMethod("addVideoMaterial", {
    http: {
      path: "/addVideoMaterial",
      verb: "POST",
      status: 200,
      errorStatus: 502,
      description: "addVideoMaterial",
    },

    accepts: [{ arg: "data", type: "object", http: { source: "body" } }],
    returns: { arg: "data", type: "object", root: true },
  });
  institute.addStudyMaterial = function (data, cb) {
    institute.findById(data.id, function (err, items) {
      if (err) {
        cb(err);
      } else {
        let obj = {};
        let value = [];
        if (items.subject.length > 0) {
          value = items.subject.filter((e) => e.id == data.subjectId);
          //     for (let index = 0; index < items.subject.length; index++) {
          //  if (items.exam[index].id === data.examId) {
          obj = {
            isActive: true,
            courseName: data.courseName,
            url: data.url,
            price: data.price,
            id: shortid.generate(),
          };
          value[0].studyMaterial.push(obj);


          items.updateAttributes({ subject: items.subject }, function (
            err,
            res
          ) {
            if (err) {
              cb(null, err);
            } else {
              console.log("success");
              cb(null, res);
            }
          });
        } else {
          cb(null, "No Exams Found");
        }
      }
    });
  };

  institute.remoteMethod("addStudyMaterial", {
    http: {
      path: "/addStudyMaterial",
      verb: "POST",
      status: 200,
      errorStatus: 502,
      description: "addStudyMaterial",
    },

    accepts: [{ arg: "data", type: "object", http: { source: "body" } }],
    returns: { arg: "data", type: "object", root: true },
  });

  ///

  institute.addMockTest = function (data, cb) {
    institute.findById(data.id, function (err, items) {
      if (err) {
        cb(err);
      } else {
        let obj = {};
        let value = [];
        if (items.subject.length > 0) {
          value = items.subject.filter((e) => e.id == data.subjectId);
          //  for (let index = 0; index < items.subject.length; index++) {

          obj = {
            testName: data.testName,
            testType: data.testType,
            isActive: true,
            timeAlloted: data.timeAlloted,
            questions: data.questions,
            theory: data.theory,
            id: shortid.generate(),
          };
          //   items.subject[index].mockTest.push(obj);
          //   }

          value[0].mockTest.push(obj);



          //  items.subject[index].mockTest.push(obj);
          items.updateAttributes({ subject: items.subject }, function (
            err,
            res
          ) {
            if (err) {
              console.log("falied");
            } else {
              cb(null, res);
            }
          });
        } else {
          cb(null, "No Test Found");
        }
      }
    });
  };
  institute.remoteMethod("addMockTest", {
    http: {
      path: "/addMockTest",
      verb: "POST",
      status: 200,
      errorStatus: 502,
      description: "addMockTest",
    },

    accepts: [{ arg: "data", type: "object", http: { source: "body" } }],
    returns: { arg: "data", type: "object", root: true },
  });

  // institute.addSubject = function (data, cb) {
  //   institute.findById(data.id, function (err, items) {
  //     if (err) {
  //       cb(err);
  //     } else {
  //       let obj = {};
  //       let value = [];

  //       if (items.exam.length > 0) {
  //         value = items.exam.filter((e) => e.id == data.examId);

  //         obj = {
  //           isActive: true,
  //           courseName: data.courseName,
  //           description: data.description,
  //           isOnline: data.isOnline,
  //           price: data.price,
  //           numOfClasses: data.numOfClasses,
  //           addBenefits: data.addBenefits,
  //           courseDuration: data.courseDuration,
  //           id: shortid.generate(),
  //         };

  //         value[0].subjects.push(obj);

  //         items.updateAttributes({ exam: items.exam }, function (err, res) {
  //           if (err) {
  //             cb(null, err);
  //           } else {
  //             cb(null, res);
  //           }
  //         });
  //       } else {
  //         cb(null, "No Exams Found");
  //       }
  //     }
  //   });
  // };
  // institute.remoteMethod("addSubject", {
  //   http: {
  //     path: "/addSubject",
  //     verb: "POST",
  //     status: 200,
  //     errorStatus: 502,
  //     description: "addSubject",
  //   },

  //   accepts: [{ arg: "data", type: "object", http: { source: "body" } }],
  //   returns: { arg: "data", type: "object", root: true },
  // });

  institute.editSubject = function (data, cb) {
    institute.findById(data.id, function (err, items) {
      if (err) {
        cb(err);
      } else {
        let obj = {};
        let value = [];

        if (items.subject.length > 0) {
          let subjectInExistingExam = {};
          for (let index = 0; index < items.subject.length; index++) {
            if (items.subject[index].id === data.subjectId) {
              items.subject[index].courseName = data.courseName;
              items.subject[index].description = data.description;
              items.subject[index].price = data.price;
              items.subject[index].discount = data.discount;
              items.subject[index].offerDiscount = data.offerDiscount;
              items.subject[index].finalPrice = data.finalPrice;
              items.subject[index].numOfClasses = data.numOfClasses;
              items.subject[index].courseDuration = data.courseDuration;
              items.subject[index].examName = data.examName;
            }
          }

          items.updateAttributes({ subject: items.subject }, function (
            err,
            res
          ) {
            if (err) {
              cb(null, err);
            } else {
              cb(null, res);
            }
          });
        } else {
          cb(null, "No subject Found");
        }
      }
    });
  };
  institute.remoteMethod("editSubject", {
    http: {
      path: "/editSubject",
      verb: "POST",
      status: 200,
      errorStatus: 502,
      description: "editSubject",
    },

    accepts: [{ arg: "data", type: "object", http: { source: "body" } }],
    returns: { arg: "data", type: "object", root: true },
  });

  institute.verification = function (id, cb) {
    institute.findOne({ where: { id: id } }, function (err, result) {
      let res = [];
      if (err) {
        cb(null, err);
      } else {
        if (!result || result.length > 0) {
          cb(null, []);
        } else {
          var nowPlus30Days = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000);
          let obj = {
            isVerified: true,
            createdDate: new Date(Date.now()),
            expireDate: nowPlus30Days,
          };

          result.updateAttributes(obj, function (err, userRes) {
            if (err) {
              cb(null, err);
            } else {
              cb(null, userRes);
            }
          });
        }
      }
    });
  };
  institute.remoteMethod("verification", {
    http: {
      path: "/verification",
      verb: "patch",
      status: 200,
      errorStatus: 502,
      description: "verification",
    },
    accepts: [{ arg: "id", type: "string", required: true }],
    returns: { arg: "data", type: "object", root: true },
  });

  institute.getAdminInstitutes = function (cb) {
    var connector = this.getConnector();
    var aggregate = {
      pipeline: [
        {
          $lookup: {
            from: "demoClasses",
            localField: "instituteName",
            foreignField: "instituteName",
            as: "demoClass",
          }
        },
        {
          $lookup: {
            from: "ratings",
            localField: "instituteName",
            foreignField: "instituteName",
            as: "reviews",
          }
        },
        {
          $lookup: {
            from: "gallery",
            localField: "instituteName",
            foreignField: "instituteName",
            as: "gallery",
          }
        },
        {
          $lookup: {
            from: "toppers",
            localField: "instituteName",
            foreignField: "instituteName",
            as: "toppers",
          }
        },
        {
          $lookup: {
            from: "faculity",
            localField: "instituteName",
            foreignField: "instituteName",
            as: "faculity",
          }
        }
      ],
    };
    try {
      var collection = connector.collection("institute");
      var cursor = collection.aggregate(aggregate.pipeline, {});
      return cursor.toArray(function (err, data) {

        cb(null, data)
      });
    } catch (error) {
      cb(new Error(error));
    }
  };
  institute.remoteMethod("getAdminInstitutes", {
    http: {
      path: "/getAdminInstitutes",
      verb: "get",
      status: 200,
      errorStatus: 502,
      description: "Get Admin Institutes",
    },
    accepts: [

    ],
    returns: { arg: "data", type: "object", root: true },
  });

  institute.deleteCourseFromInstituteByCourseIdAdmin = function (id, cb) {
    var connector = this.getConnector();
    var aggregate = {
      pipeline: [
        {
          $pull:{subject:{id}}
        }
      ]
    };
    try {
      var collection = connector.collection("institute");
      var cursor = collection.aggregate(aggregate.pipeline, {});
      return cursor.toArray(function (err, data) {

        // data.findByIdAndDelete(id);
        // for (let index = 0; index < data.length; index++) {

        //   const instituteData = data[index];
        //   const subject = instituteData.subject.filter(subject=>subject.id===id);
        //   collection.aggregate(subject);

        // }
        // data.forEach(subData=>{
        //   console.log(subData.subject);
        // })

        cb(null, data)
      });
    } catch (error) {
      cb(new Error(error));
    }
  };
  institute.remoteMethod("deleteCourseFromInstituteByCourseIdAdmin", {
    http: {
      path: "/delete-course-from-institute",
      verb: "delete",
      status: 200,
      errorStatus: 502,
      description: "Delete Course From Institute. Admin",
    },
    accepts: [
      { arg: "id", type: "string" }
    ],
    returns: { arg: "data", type: "object", root: true },
  });



};
