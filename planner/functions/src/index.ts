// Remove the unused imports from v2 and logger, and replace with relevant imports

import * as functions from 'firebase-functions'; // Import from v1 for onRequest
import * as admin from 'firebase-admin'; // Admin SDK initialization
import * as activityRecommendation from '../activityRecommendation'; 
import * as destinationRecommendation from '../destinationRecommendation'; 
// Initialize Firebase Admin SDK
admin.initializeApp();

// Define the function triggers using onRequest
export const getActivityRecommendations = functions.https.onRequest(activityRecommendation.getActivityRecommendations);
export const getDestinationRecommendations = functions.https.onRequest(destinationRecommendation.getDestinationRecommendations);
