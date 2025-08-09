


export const onRequestGet = async () => {
    
    var queryFn = async () => {

        const response = await fetch('https://okwierdo.onrender.com/api/moon')
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        return response.json()
  
      }
  
      const bit = await queryFn()
    
    return new Response(JSON.stringify(bit));
  };
  
  




