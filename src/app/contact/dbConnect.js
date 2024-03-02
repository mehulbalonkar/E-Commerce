export default async function dbConnect() { 
if(mongoose.connectiion.readyState==1) {
    return mongoose.connectiion.asPromise();
}
  return  await mongoose.connect(process.env.MongoDB_URL)
};