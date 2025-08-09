

const URLS = {
  production: 'https://zero01-alligator-quest.onrender.com/api/',
  staging: 'http://localhost:3005/api/time/init',
};

export const onRequestGet = async () => {
    
    var queryFn = async () => {

      const targetEnv = env.TARGET_ENVIRONMENT;
      const targetUrl = URLS[targetEnv] || URLS.production + 'time/init';

        const response = await fetch( targetUrl )
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        return response.json()
  
      }
  
      const bit = await queryFn()
    
    return new Response(JSON.stringify(bit));
  };
  
  




