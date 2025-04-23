import { Queue } from "bullmq"
import {createClient } from "redis"

const connection = createClient({url: 'redis://localhost:6379'})

connection.connect()

const bookingQueue = new Queue('booking-queue',{connection})

export {bookingQueue, connection}