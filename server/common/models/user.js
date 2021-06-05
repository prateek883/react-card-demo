"use strict";
const SendOtp = require("sendotp");
const sendOtp = new SendOtp("328220AWZiMf4J5eb310c0P1");
module.exports = function (user) {
  user.validatesUniquenessOf('phone');
  user.observe("before save", function generateOtp(ctx, next) {
    if (ctx.isNewInstance) {
      if (ctx.instance.phone && ctx.instance.phone.length > 0) {
        let otp = Math.floor(1000 + Math.random() * 9000).toString();

        sendOtp.send(ctx.instance.phone, "PRIIND", otp, function (error, data) {
          next();
        });
      } else {
        next();
      }
    } else {
      next();
    }
  });
  user.observe("after save", function (ctx, next) {
    ctx.instance.success = true;
    next();
  });

  user.sendOtp = function (email, cb) {
    user.findOne({ where: { email: email } }, function (err, result) {
     
      if (err) {
        cb(new Error(err));
      } else if (!result || result == null || result == undefined) {
        cb(null, "Email Not Found");
      } else {
        if (result.phone != null || result.phone.length > 0) {
          let otp = Math.floor(1000 + Math.random() * 9000).toString();

          sendOtp.send(result.phone, "PRIIND", otp, function (error, data) {
            if (error) {
              cb(null, error);
            } else {
              cb(null, otp);
            }
          });
        } else {
          cb(null, "Phone number not valid");
        }
      }
    });
  };

  user.remoteMethod("sendOtp", {
    http: {
      path: "/sendOtp",
      verb: "get",
      status: 200,
      errorStatus: 502,
      description: "send Otp",
    },
    accepts: [{ arg: "email", type: "string", required: true }],
    returns: { arg: "data", type: "object", root: true },
  });

  user.getotp = function (email, otp, cb) {
    user.findOne({ where: { email: email } }, function (err, result) {
      if (err) {
        cb(new Error(err));
      } else if (result) {
        if (result.phone != null || result.phone.length > 0) {
          sendOtp.verify(result.phone, otp, function (error, data) {
            if (data.type == "success") {
              console.log("OTP verified successfully");
              cb(null, "verified");
            }
            if (data.type == "error") {
              console.log("OTP verification failed");
              cb(null, "invalid");
            }
          });
        } else {
          cb(null, "Validate Phone Number");
        }
      }
    });
  };

  user.remoteMethod("getotp", {
    http: {
      path: "/getotp",
      verb: "get",
      status: 200,
      errorStatus: 502,
      description: "GET OTP",
    },
    accepts: [
      { arg: "email", type: "string", required: true },
      { arg: "otp", type: "string", required: true },
    ],
    returns: { arg: "data", type: "object", root: true },
  });

  user.forgotPassword = function (email, password, cb) {
    user.findOne({ where: { email: email } }, function (err, result) {
      let res = [];
      if (err) {
        cb(null, err);
      } else {
        if (!result || result.length > 0) {
          cb(null, []);
        } else {
          var _newpassword = password;
          result.updateAttributes({ password: _newpassword }, function (
            err,
            userRes
          ) {
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
  user.remoteMethod("forgotPassword", {
    http: {
      path: "/forgotPassword",
      verb: "patch",
      status: 200,
      errorStatus: 502,
      description: "forgotPassword",
    },
    accepts: [
      { arg: "email", type: "string", required: true },
      { arg: "password", type: "string", required: true },
    ],
    returns: { arg: "data", type: "object", root: true },
  });



  //Sending Welcome Email On Successful Signup
  user.sendEmail = function(toAddress,subject,messageBody,cb){
    user.email.send({
      to: toAddress,
      from: 'ostellocare@gmail.com',
      subject: subject,
      text: messageBody,
      html: `<span>${messageBody}</span>`
    }, function(err, mail) {
      console.log('email sent!');
      if(err)
      cb(null,err);
      else{
        cb(null,mail);
      }
    });
  }

  user.remoteMethod("sendEmail", {
    http: {
      path: "/send-email",
      verb: "post",
      status: 200,
      errorStatus: 502,
      description: "Sending Email",
    },
    accepts: [
      { arg: "toAddress", type: "string", required: true },
      { arg: "subject", type: "string", required: true },
      { arg: "messageBody", type: "string", required: true },
    ],
    returns: { arg: "data", type: "object", root: true },
  });


  //Sending Email On Success Registration of Any Upcoming Events
  // user.sendUpcomingEventsEmail = function(toAddress,subject,messageBody,cb){
  //   user.email.send({
  //     to: toAddress,
  //     from: 'ahmed.resoluteai@gmail.com',
  //     subject: subject,
  //     text: messageBody,
  //     html: `<span>${messageBody}</span>`
  //   }, function(mail,err) {
  //     console.log('email sent!');
  //     if(err)
  //     cb(err);
  //     else{
  //       cb(mail);
  //     }
  //   });
  // }

  // user.remoteMethod("sendUpcomingEventsEmail", {
  //   http: {
  //     path: "/send-upcoming-events-email",
  //     verb: "post",
  //     status: 200,
  //     errorStatus: 502,
  //     description: "Sending Email On Success Registration of Any Upcoming Events",
  //   },
  //   accepts: [
  //     { arg: "toAddress", type: "string", required: true },
  //     { arg: "subject", type: "string", required: true },
  //     { arg: "messageBody", type: "string", required: true },
  //   ],
  //   returns: { arg: "data", type: "object", root: true },
  // });

  // //Sendind Email to Ostello Admin for the User Registration for Upcoming Events
  // user.sendUpcomingEventsEmailToAdminUponSuccessfulRegistration = function(toAddress,subject,messageBody,cb){
  //   user.email.send({
  //     to: toAddress,
  //     from: 'ahmed.resoluteai@gmail.com',
  //     subject: subject,
  //     text: messageBody,
  //     html: `<span>${messageBody}</span>`
  //   }, function(mail,err) {
  //     console.log('email sent!');
  //     if(err)
  //     cb(err);
  //     else{
  //       cb(mail);
  //     }
  //   });
  // }

  // user.remoteMethod("sendUpcomingEventsEmailToAdminUponSuccessfulRegistration", {
  //   http: {
  //     path: "/send-upcoming-events-email-admin",
  //     verb: "post",
  //     status: 200,
  //     errorStatus: 502,
  //     description: "Sendind Email to Ostello Admin for the User Registration for Upcoming Events",
  //   },
  //   accepts: [
  //     { arg: "toAddress", type: "string", required: true },
  //     { arg: "subject", type: "string", required: true },
  //     { arg: "messageBody", type: "string", required: true },
  //   ],
  //   returns: { arg: "data", type: "object", root: true },
  // });
};
