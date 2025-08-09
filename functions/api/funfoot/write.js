

export const onRequestGet = async ( request ) => {

    const url = new URL(request.url);
  // read the encrypted data from the query param
  const idx = url.searchParams.get('idx');
      
      var queryFn = async () => {
     
          const response = await fetch('https://okwierdo.onrender.com/api/0kwierdo/funfoot/write?idx=' + idx )
          if (!response.ok) {
            throw new Error('Network response was not ok : okwierdo.onrender.com/api/0kwierdo/funfoot/read')
          }
          return response.json()
    
        }
    
        const bit = await queryFn()
      
      return new Response(JSON.stringify(bit));
    };
    
    
  