const Razorpay = require("razorpay");
const shortid = require("shortid");
module.exports = function(subscriptionOrder){
// LIVE
    let instance = new Razorpay({
        key_id: "rzp_live_rL6BfUPoiqa9jl",
        key_secret: "eKjJhl5j31JWd5u4fun7U18Y",
      });
// Test Mode
      // let instance = new Razorpay({
      //   key_id: "rzp_test_vErRY7h7bh7sXe",
      //   key_secret: "T2R7CbC4nOlB1eDbtX1AilVS",
      // });
      subscriptionOrder.addSubscriptionOrder = function (data, cb) {
        
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
              subscriptionName: data.subscriptionName,
              subscriptionType: data.subscriptionType,
              transactionId: response.receipt,
              status: response.status,
              amount: response.amount.toFixed(2),
              createdDate: new Date()
            };
           
           
            subscriptionOrder.create(orders, function (err, result) {
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
      subscriptionOrder.remoteMethod("addSubscriptionOrder", {
        http: {
          path: "/addSubscriptionOrder",
          verb: "post",
          status: 200,
          errorStatus: 502,
          description: "Add Subscription Order",
        },
    
        accepts: [{ arg: "data", type: "object", http: { source: "body" } }],
        returns: { arg: "data", type: "object", root: true },
      });





}