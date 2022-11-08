import express from "express";
import auth from "./auth";
import user from "./user";
import product from "./product";
import category from "./category";
import order from "./order";
import coupon from "./coupon";
import comment from "./comment";
const router = express.Router();

router.use("/auth", auth);
router.use("/user", user);
router.use("/product", product);
router.use("/category", category);
router.use("/order", order);
router.use("/coupon", coupon);
router.use("/comment", comment);

export default router;
