

export const onRequestGet = async () => {
    
    var queryFn = async () => {

      const targetUrl = 'https://zero01-alligator-quest.onrender.com/api/earth/update';

      

        const response = await fetch( targetUrl )
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        return response.json()
  
      }
  
      const bit = await queryFn()
    
    return new Response(JSON.stringify(bit));
  };
  
  




