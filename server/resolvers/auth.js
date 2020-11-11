import skip from 'graphql-resolvers'

export const isAuthenticated = (parent, args, {userId}) => {
   if(userId) {
      skip
   } else {
      throw new Error('Unauthorized')
   }
}

// Method hasRole
// Stworzymy middleware do sprawdzania roli, wrzucimy do context i tutaj weźmiemy