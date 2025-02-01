const mongoose = require("mongoose");
mongoose.set('debug', true);

const  connectDb = () => {
  console.log("Attempting to connect to MongoDB...");
  return mongoose
    .connect(
     "mongodb+srv://smahesh-kumarr:MaheshKumar@cluster0.tlsbu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/BloggAPP",
    )
    // .then(() => console.log("Connected to MongoDB successfully!"))
    // .catch((err) => {
    //   console.error("Error connecting to MongoDB:", err.message);
    //   process.exit(1); 
    // });
};
//  "mongodb+srv://muralidharansankar414:OSai0KwHMPbQCldB@cluster0.nlbzojw.mongodb.net/food-del"
//"mongodb+srv://smahesh-kumarr:MaheshKumar@cluster0.tlsbu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/BloggAPP";
module.exports = { connectDb};