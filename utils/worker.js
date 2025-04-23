import { Worker } from "bullmq";
import { connection } from "./queue.js";

const availableSeats = 2000
let seatsBooked = 0;

const worker = new Worker('booking-queue', (job) => {
    try {
        if(seatsBooked<availableSeats){
            seatsBooked++
            console.log(`Booking allowed for user: ${job.data.userId}`);
            return { status: 'ready' };
        }else{
            console.log(`Booking denied(full) for user: ${job.data.userId}`);
            return { status: 'full' };
        }
    } catch (error) {
        console.log("bullmq worker error: "+error);
    }
},{connection})