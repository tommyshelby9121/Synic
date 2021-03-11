import { connect, connection } from "mongoose";

const connectDB = async () => {
    try {
        await connect(process.env.MONGO_URI!, {
           useNewUrlParser: true,
           useUnifiedTopology: true,
           useCreateIndex: true,
           useFindAndModify: false,
        });

        console.log(`MongoDB Connected: ${connection.host}`);
    }
    catch (err) {
        console.error(`Error establishing MongoDB Connection: ${err.message}`);
        process.exit(1);
    }
}

export default connectDB;
