

const URLS = {
  production: 'https://zero01-alligator-quest.onrender.com/api/',
  staging: 'http://localhost:3005/api/',
};

export const onRequestGet = async (context) => {

  var request = context.request

  var environment = env.TARGET_ENVIRONMENT

  var loc;
  if (environment == 'staging') loc = env.STAGING
  else loc = env.PRODUCTION

  var queryFn = async () => {

    const targetUrl = loc + 'time/init';

    const response = await fetch(targetUrl)
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }
    return response.json()

  }

  const bit = await queryFn()

  return new Response(JSON.stringify(bit));
};






