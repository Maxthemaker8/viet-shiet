const Order = require("../models/Order");
const{
   verifyToken,
   verifyTokenAndAuthorization,
   verifyTokenAndAdmin,
} = require("./verify");
const router = require("express").Router();

//CREATE
router.post("/", verifyToken, async(req, res)=>{
   const newOrder = new Order(req.body);
   try{
      const savedOrder = await newOrder.save();
      res.status(200).json(savedOrder);
   }catch(err){
      res.status(500).json(err);
   }
});

//UPDATE
router.put("/:id", verifyTokenAndAdmin, async(req,res)=>{
   try{
      const updatedOrder = Order.findByIdAndUpdate(
         req.params.id,
         {
            $set: req.body,
         },
         {new: true}
      );
      res.status(200).json(updatedOrder);
   }catch(err){
      res.status(500).json(err);
   }
});

//DELETE
router.delete("/:id", verifyTokenAndAdmin, async(req,res)=>{
   try{
      await Order.findByIdAndDelete(req.params.id );
      res.status(200).json("Order deleted!");
   }catch(err){
      res.status(500).json(err);
   }
});

//GET USER'S ORDERS
router.get("/find/:userId", verifyTokenAndAuthorization, async(req,res)=>{
   try{
      const orders = await Order.find({userId: req.params.userId});
      res.status(200).json(orders);
   }catch(err){
      res.status(500).json(err);
   }
});

//GET ALL USERS' ORDERS
router.get("/find/all", verifyTokenAndAdmin, async(req,res)=>{
   try{
      const allOrders = await Order.find();
      res.status(200).json(allOrders);
   }catch(err){
      res.status(500).json(err);
   }
});

//GET MONTHLY INCOME COMING SOON

module.exports= router;