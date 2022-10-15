// TODO: Once your application is deployed, copy an API id here so that the frontend could interact with it
const apiId = 'mne5kfgq2k'
export const apiEndpoint = `https://${apiId}.execute-api.us-east-1.amazonaws.com/dev`
export const authConfig = {

  // https://mne5kfgq2k.execute-api.us-east-2.amazonaws.com/dev
  // TODO: Create an Auth0 application and copy values from it into this map. For example:
  // domain: 'dev-nd9990-p4.us.auth0.com',
  domain: 'dev-qt-sosv5.us.auth0.com',            // Auth0 domain
  clientId: 'g3pwRbA4XC2YRLoeoHCxAY0FTsylQaPj',          // Auth0 client id
  callbackUrl: 'http://localhost:3000/callback'
}
