var nodemailer = require("nodemailer");
var smtpTransport = require("nodemailer-smtp-transport");

module.exports = function (contactUs) {
  // Insert contactUs
  contactUs.contactUs = function (data, cb) {
    let res = [];
    let obj = {
      name: data.name,
      email: data.email,
      message: data.message,
      phoneNumber: data.phoneNumber,
    };

    res.push(obj);

    contactUs.create(res, function (err, result) {
      if (err) {
        cb(null, err);
      } else {

  console.log(result.phoneNumber,result.name)
        var smtpTransport = nodemailer.createTransport({
          service: "Gmail",
       
           auth: {
              user: "ostellocare@gmail.com",
              pass: "@Ostello28Care"
          }
      });


        // setup e-mail data with unicode symbols
        var mailOptions = {
          from: data.email, // sender address
          to: "ostellocare@gmail.com", // list of receivers
          subject: "Enquiry fourm", // Subject line
          text: "Result",
          html: "<b> " + "name: " + result[0].name + ", Message: " + result[0].message + ", PhoneNumber: " + result[0].phoneNumber + " </b>", // html body
        };
      
        // send mail with defined transport object
        smtpTransport.sendMail(mailOptions, function (error, info) {
          if (error) {
            return console.log(error);
          }
          console.log("Message sent: " + info.response);
        });

        cb(null, result);
      }
    });
  };
  contactUs.remoteMethod("contactUs", {
    http: {
      path: "/contactUs",
      verb: "post",
      status: 200,
      errorStatus: 502,
      description: "contact Us",
    },

    accepts: [{ arg: "data", type: "object", http: { source: "body" } }],
    returns: { arg: "data", type: "object", root: true },
  });
};
