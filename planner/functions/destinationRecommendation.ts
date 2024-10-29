import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import { DestinationRecommendationModel } from '../models/destination_recommendation_model';

admin.initializeApp();

export const getDestinationRecommendations = functions.https.onRequest(async (req, res) => {
    const model = new DestinationRecommendationModel(10, 20, 5);
    const recommendations = model.forward(req.body.input);
    res.send(recommendations);
});
