// import React from 'react'


// const Ecommerce = () => {
//   return (
//     <div>eCommerce



//     </div>
//   )
// }

// export default Ecommerce

/************************************************************************ */

// import React , { useEffect, useState } from "react";

// const Ecommerce = () => {
//   const [users, setUsers] = useState([])

//   const fetchData = () => {
//     fetch("http://www.omdbapi.com/?i=tt3896198&apikey=f317b1df")
//       .then(response => {
//         return response.json()
//       })
//       .then(data => {
//         setUsers(data)
//       })
//   }

//   useEffect(() => {
//     fetchData()
//   }, [])

//   return (
//     <div>
//       {users.length > 0 && (
//         <ul>
//           {users.map(user => (
//             <li key={user.id}>{user.name}</li>
//           ))}
//         </ul>
//       )}
//     </div>
//   )
// }

// export default Ecommerce;