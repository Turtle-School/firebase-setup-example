import express, {Request, Response} from "express";
import {onRequest} from "firebase-functions/v2/https";
import {initializeApp} from "firebase-admin/app";
import {getFirestore, DocumentReference} from "firebase-admin/firestore";

initializeApp();
const firestore = getFirestore();

const apiRouter = express();

apiRouter.use("/", async (req: Request, res: Response) => {
  // console.log(`APP: ${JSON.stringify(app)}`);

  const docRef: DocumentReference = firestore.collection("users").doc("goku");

  const operation = await docRef.set({
    "name": "Son Goku",
    "born": "1980",
  });

  res.status(200).json(JSON.stringify(operation));
});

exports.api = onRequest(apiRouter);

