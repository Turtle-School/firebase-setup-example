import express, {Request, Response} from "express";
import {onRequest} from "firebase-functions/v2/https";
import {initializeApp} from "firebase-admin/app";

const app = initializeApp();

const apiRouter = express();
apiRouter.use("/", (req: Request, res: Response) => {
  console.log(`APP: ${JSON.stringify(app)}`);

  res.status(200).json(app.name);
});

exports.api = onRequest(apiRouter);

