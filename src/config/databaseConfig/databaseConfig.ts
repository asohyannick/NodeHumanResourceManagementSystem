import 'dotenv/config';
import { connect } from 'mongoose';
const MONGODB_URL: string = process.env.MONGODB_URI as string;
async function connectedToDB() {
    if (!MONGODB_URL) {
        console.log("MongoDB url is undefined.", MONGODB_URL);
        return;
    }
    try {
        await connect(MONGODB_URL);
        console.log("MongoDB connection is successful!");
    } catch (error: unknown) {
        if (error instanceof Error) {
            console.log("Failed to connect to MongoDB...")
        }
    }
}
export default connectedToDB;