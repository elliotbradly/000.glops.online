

import { useQuery } from "@tanstack/react-query"

export function useWriteFictiq() {
    return useQuery({
        queryFn: async () => {


            var url = 'https://upload-r2-assets.fictiq.workers.dev/README.md'
            var token = 'voice-of-caitlin'

            var data = `game on`


            const response = await fetch(url, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                  'Authorization': `Bearer ${token}` // Include the token in the Authorization header
                },
                body: JSON.stringify(data) // Convert data to JSON
              });
          
              if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
              }
          
              const responseData = await response.text(); // Parse the JSON response
              return responseData;


            

            //const response = await fetch('/api/space/hexmap/shape')
            //if (!response.ok) {
             //   alert('Network response was not ok : /api/space/init ')
                //throw new Error('Network response was not ok')
           // }
           // return response.json()






        },
        queryKey: ['writeFictiq']
    })
}

