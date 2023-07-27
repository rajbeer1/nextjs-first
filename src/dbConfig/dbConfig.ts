import mongoose from "mongoose";
export async function connect() {
  try {
    mongoose.connect('mongodb+srv://royu49:rajbeer11@cluster0.xziu5g1.mongodb.net/?retryWrites=true');
    const connection = mongoose.connection;
    connection.on('connected', () => {
      console.log('mongodb connected');
    })
     connection.on('error', () => {
       console.log('mongodb connection error');
       process.exit();
    })
    
  } catch (error) {
    console.log('something went wrong');
    console.log(error);
  }
  
}