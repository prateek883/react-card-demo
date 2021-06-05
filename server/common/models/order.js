const Razorpay = require("razorpay");
const shortid = require("shortid");
module.exports = function (order) {
//Live
   let instance = new Razorpay({
    key_id: "rzp_live_rL6BfUPoiqa9jl",
    key_secret: "eKjJhl5j31JWd5u4fun7U18Y",
  });
  //Test
  // let instance = new Razorpay({
  //   key_id: "rzp_test_vErRY7h7bh7sXe",
  //   key_secret: "T2R7CbC4nOlB1eDbtX1AilVS",
  // });

  order.addOrder = function (data, cb) {
     
    let dataObj = {
      amount: data.amount,
      currency: data.currency,
      receipt: shortid.generate(),
      payment_capture: true,
      notes: "Order Created", 
    };

    instance.orders
      .create(dataObj)
      .then((response) => {
        let order_id = response.id;
  
        let orders = {
          email: data.email,
          phone: data.phone,
          instituteName: data.instituteName,
          orderId: order_id,
          itemName: data.itemName,
          itemType: data.itemType,
          transactionId: response.receipt,
          status: response.status,
          amount: response.amount.toFixed(2),
        };
       
       
        order.create(orders, function (err, result) {
          if (err) {
            cb(new Error(err));
          } else {
          
            cb(null, result)

          }
        });
        
      })
      .catch((error) => {
        console.log(error);
      });
     // cb(null,  res)
  };
  order.remoteMethod("addOrder", {
    http: {
      path: "/addOrder",
      verb: "post",
      status: 200,
      errorStatus: 502,
      description: "Add Order",
    },

    accepts: [{ arg: "data", type: "object", http: { source: "body" } }],
    returns: { arg: "data", type: "object", root: true },
  });

  order.trackOrders = function (itemType,email, cb) {
    var connector = this.getConnector();
    var aggregate = {
      pipeline: [
       {
          $match: { $and: [{"itemType": itemType},{ "email": email },  { "status": "paid" }] },
        }
      ],
    };
    try {
      var collection = connector.collection("order");
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
  order.remoteMethod("trackOrders", {
    http: {
      path: "/trackOrders",
      verb: "get",
      status: 200,
      errorStatus: 502,
      description: "track Orders",
    },
    accepts: [{ arg: "itemType", type: "string" },
    { arg: "email", type: "string" }
    
   
  ],
    returns: { arg: "data", type: "object", root: true },
  });



};
