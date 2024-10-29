import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import { ActivityRecommendationModel } from '../models/activity_recommendation_model';

admin.initializeApp();

export const getActivityRecommendations = functions.https.onRequest(async (req, res) => {
    const model = new ActivityRecommendationModel(10, 20, 5);
    const recommendations = model.forward(req.body.input);
    res.send(recommendations);
});
