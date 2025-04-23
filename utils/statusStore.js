import {createClient} from "redis"
const redis = createClient()

redis.connect()

 
 async function setStatus(token,status){
    await redis.set(bookingToken, status,  { EX: 600 }) //10 min expire
 }

 async function setStatus(token,status){
    await redis.set(bookingToken, status,  { EX: 600 }) //10 min expire
 }