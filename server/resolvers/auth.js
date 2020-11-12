import skip from 'graphql-resolvers'

export const isAuthenticated = (parent, args, {userId}) => {
   if(userId) {
      skip
   } else {
      throw new Error('Unauthorized')
   }
}

export const hasRoleAdmin = (parent, args, {userRole}) => {
   if(userRole === 'Admin') {
      skip
   } else {
      throw new Error('Not Allowed')
   }
}

export const hasRoleProjectLeader = (parent, args, {userRole}) => {
   if(userRole === 'ProjectLeader') {
      skip
   } else {
      throw new Error('Not Allowed')
   }
}