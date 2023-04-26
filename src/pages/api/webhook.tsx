import { NextApiRequest, NextApiResponse } from "next";
import { buffer } from 'micro';
import * as admin from 'firebase-admin';

const serviceAccount = require('../../../permissions.json');

// TODO Secure a connection to firebase from the backend

const app = !admin.apps.length ? admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
}) : admin.app();

// TODO Establish connection to stripe
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const endpointSecret = process.env.STRIPE_SIGNING_SECRET;

export default async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'POST') {

    }


}