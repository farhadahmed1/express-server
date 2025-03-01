"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
// parsers
app.use(express_1.default.json());
// middleware
const logger = (req, res, next) => {
    console.log(req.url, req.method, req.hostname);
    next();
};
// router
const userRouter = express_1.default.Router();
const courseRouter = express_1.default.Router();
app.use("/api/v1/users", userRouter);
app.use("/api/v1/courses", courseRouter);
userRouter.post("/create-user", (req, res) => {
    const user = req.body;
    console.log(user);
    res.json({
        success: true,
        message: "User is created successfully",
        data: user,
    });
});
// userRouter.post("/create-user", (req: Request, res: Response) => {
//   const user = req.body;
//   console.log(user);
//   res.json({
//     success: true,
//     message: "User is created successfully",
//     data: user,
//   });
// });
courseRouter.post("/create-course", (req, res) => {
    const course = req.body;
    console.log(course);
    res.json({
        success: true,
        message: "User is created successfully",
        data: course,
    });
});
app.get("/", logger, (req, res) => {
    res.send("Hello Backend this is a test");
});
app.post("/", logger, (req, res) => {
    console.log(req.body);
    res.json({
        message: "success",
    });
});
exports.default = app;
