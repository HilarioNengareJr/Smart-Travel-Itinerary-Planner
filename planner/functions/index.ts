import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import * as activityRecommendation from './activityRecommendation';
import * as destinationRecommendation from './destinationRecommendation';

admin.initializeApp();

export const getActivityRecommendations = functions.https.onRequest(activityRecommendation.getActivityRecommendations);
export const getDestinationRecommendations = functions.https.onRequest(destinationRecommendation.getDestinationRecommendations);
