import connectDB from "./db/index.js";
import { app } from "./app.js";


connectDB()
.then(()=> {
    const port = process.env.PORT || 4000;
    app.on("error", (e)=> {
        console.log("Internal Server Error ", e);
    })
    app.listen(port, ()=> {
        console.log("Listening on PORT: ", port);
    })
})
.catch((error)=>  {
    console.log("DB Connection Failed: ", error);
})