


export const onRequestGet = async () => {
    
    var queryFn = async () => {
   
        const response = await fetch('https://okwierdo.onrender.com/api/0kwierdo/okwierdo/open')
        if (!response.ok) {
          throw new Error('Network response was not ok : okwierdo.onrender.com/api/okwierdo/open')
        }
        return response.json()
  
      }
  
      const bit = await queryFn()
    
    return new Response(JSON.stringify(bit));
  };
  
  




