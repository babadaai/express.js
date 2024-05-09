const express =require(`express`);
const router = express.Router();
const movieRouter = require("../modules/movies/movie.api")
const orderRouter=require("../modules/order/order.api")

router.get("api/v1", (req,res)=>{
    try {
        res.json("movie api is working")
    }
    catch(e){
        next(e);
    }
})
router.use("/api/v1/movies",movieRouter)
router.use("api/v1/orders",orderRouter)

module.exports=router;