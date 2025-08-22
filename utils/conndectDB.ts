import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO_URI

if(!MONGO_URI){
    throw new Error( "The mongo URI is invalid")
}

let cached = global.mongoose

if(!cached){
    cached = global.mongoose = { conn: null, promise: null }
}

async function dbConnect() {
  if (cached.conn) {
    return cached.conn
  }

  // if (!cached.promise) {
  //   cached.promise = mongoose.connect(MONGO_URI!, {
  //     bufferCommands: false,
  //     dbName: "SmartDataX", 
  //   }).then((mongoose) => mongoose)
  // }

  cached.conn = await cached.promise
  return cached.conn
}

export default dbConnect