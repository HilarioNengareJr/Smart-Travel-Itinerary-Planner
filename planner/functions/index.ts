import * as functions from 'firebase-functions';
import * as activityRecommendation from './activityRecommendation';
import * as destinationRecommendation from './destinationRecommendation';

export const getActivityRecommendations = functions.https.onRequest(activityRecommendation.getActivityRecommendations);
export const getDestinationRecommendations = functions.https.onRequest(destinationRecommendation.getDestinationRecommendations);
