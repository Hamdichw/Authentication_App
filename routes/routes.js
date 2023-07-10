const router = require('express').Router();
const authentication  = require("../controllers/authentication.Controller")




router.get("/",authentication.selectAll);


module.exports=router;