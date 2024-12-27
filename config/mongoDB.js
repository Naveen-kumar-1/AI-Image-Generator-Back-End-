import mongoose from "mongoose";

const connectDB = async () => {

    mongoose.connection.on('connected', () => {
        console.log('DataBase Connected!')
    })

    await mongoose.connect(`${process.env.MONGOOSE_URI}/imagify`)
}
export default connectDB;