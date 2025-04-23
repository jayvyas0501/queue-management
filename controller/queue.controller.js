import bookingQueue from "../utils/queue";
const { v4: uuidv4 } = require('uuid');

export const joinQueue = async (req,res) => {
    try {

        const userId = uuidv4()
        const job = await bookingQueue.add('event-queue',{userId})
        
        res.status(202).json({success:true,message:"You are added to queue!",bookingToken:userId,jobId:job.id})
        
    } catch (error) {
        res.status(500).json({success:false,message:"Something went wrong please try again!"})
    }
     
}

export const checkStatus = async () =>{
    try {
        const userId = req.params
        
    } catch (error) {
        res.status(500).json({success:false,message:"Something went wrong please try again!"})
    }
}

