// TODO: Once your application is deployed, copy an API id here so that the frontend could interact with it
const apiId = 'o7c6hu2xnc'
export const apiEndpoint = `https://${apiId}.execute-api.us-east-1.amazonaws.com/dev`
export const authConfig = {

  // https://o7c6hu2xnc.execute-api.us-east-1.amazonaws.com/dev
  // TODO: Create an Auth0 application and copy values from it into this map. For example:
  // domain: 'dev-nd9990-p4.us.auth0.com',
  domain: 'dev-qt-sosv5.us.auth0.com',            // Auth0 domain
  clientId: 'SEs1Hyo0ZDhYyUdVFP7a6Mt1DnrtqcAw',          // Auth0 client id
  callbackUrl: 'http://localhost:3000/callback'
};
