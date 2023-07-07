// // theme.js
// import { createTheme } from '@mui/material/styles';

// const theme = createTheme({
//   primary: {
//     main: '#1e88e5' // Set your primary color here
//   },
//   // Add more color options
//   error: {
//     main: '#ff0000' // Set your error color here
//   },
//   success: {
//     main: '#00ff00' // Set your success color here
//   },
//   warning: {
//     main: '#ffff00' // Set your warning color here
//   },

//   typography: {
//     subtitle1: {
//       fontSize: 12
//     },
//     h1: {
//       fontSize: '1rem', // Set the desired font size for h1
//       fontWeight: 300,
//       color: '#170F49'
//     },
//     h2: {
//       fontSize: '34px', // Set the desired font size for h2
//       fontWeight: 700
//     },
//     h5: {
//       fontSize: '24px',
//       fontWeight: 700
//     },
//     body1: {
//       fontSize: '18px',
//       fontWeight: 400,
//       color: '#6F6C90'
//     }
//     // Add more typography variants as needed
//   }
// });

// export default theme;
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: 'Manrope',
      fontStyle: 'normal',
      color: '#3E083B'
    }
  }
});

export default theme;
