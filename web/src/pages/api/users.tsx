// import { useQuery } from 'urql';
// import { graphql } from '@/gql';
// import { FC } from 'react';

// const GET_USERS = graphql(`
//   query GET_USERS {
//     allUsers {
//       id
//       name
//       info {
//         goalWeight
//         height
//         startWeight
//       }
//     }
//   }
// `);

// export function UserList(): FC {
//   // our query's result, data, is typed!
//   const [{data, fetching}] = useQuery({query: GET_USERS});
//   console.log(fetching, data);
//   return (
//     <div>
//       <h3>Listed Users</h3>
//       {fetching ? (
//         <p>Loading ...</p>
//       ) : (
//         <table>
//           <thead>
//             <tr>
//               <th>Name</th>
//               <th>ID</th>
//             </tr>
//           </thead>
//           <tbody>
//             {data && data.allUsers?.map(user => (
//               <tr>
//                 <td>{user?.name}</td>
//                 <td>{user?.id}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// }

// export default UserList;

