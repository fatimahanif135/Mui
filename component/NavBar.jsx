

// "use client"
// import { AppBar, Box, Button, IconButton, Menu, MenuItem, Toolbar, Typography } from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';
// import { useState } from 'react';
// // import { useRouter } from 'next/navigation';

// const NavBar = () => {
//   const [open, setOpen] = useState(null);
//   const menuItems = ['Home', 'About', 'Contact'];
// //   const router = useRouter();

//   const handleMenuOpen = (e) => {
//     setOpen(e.currentTarget);
//   };

//   const handleMenuClose = () => {
//     setOpen(null); 
//   };


//   return (
//     <Box sx={{ flexGrow: 1 }}>
//       <AppBar position="fixed" sx={{ backgroundColor: 'black' }}>
//         <Toolbar>
//           <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
//             Appp
//           </Typography>

     
//           <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
//             {menuItems.map((item) => (
//               <li key={item} style={{ listStyle: 'none' }}>
//                 <Button key={item} color="inherit">
//                   {item}
//                 </Button>
//               </li>
//             ))}
//           </Box>

         
//           <Box sx={{ display: { md: 'block', } }}>
//             <IconButton onClick={handleMenuOpen} color="inherit">
//               <MenuIcon />
//             </IconButton>
//             <Menu
//               anchorEl={open} // The anchor element for the menu
//               open={Boolean(open)} // Check if the menu is open
//               onClose={handleMenuClose} // Close the menu when clicking outside
//             >
//               {menuItems.map((item) => (
//                 <MenuItem key={item} >
//                   {item}
//                 </MenuItem>
//               ))}
//             </Menu>
//           </Box>
//         </Toolbar>
//       </AppBar>
//     </Box>
//   );
// };

// export default NavBar;



"use client"

import { AppBar, Button, createTheme, Toolbar, Typography } from "@mui/material"
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';




const NavBar = () => {
  return (
    <>
    <AppBar position="fixed" color="secondary">
        <Toolbar>
        <Typography variant="h5" flexGrow={1}>
            Blissfull Bytes
        </Typography>
        <Button variant="text" color="inherit" startIcon={<LoginIcon/>} >
            Login
        </Button> 
        <Button variant="text" color="inherit" endIcon={<LogoutIcon/>}>
            Logout
        </Button>

        </Toolbar>



    </AppBar>
   
    </>
  )
}

export default NavBar



