import { TextField, Typography,Box, Button } from '@mui/material'
import React from 'react'

const ContactUs = () => {
  return (
 <>
{/*    only try */}
 <Typography variant='h3' mt={6} mb={6}>Don't Contact Us</Typography>

<TextField
label='First Name'
type='text'
variant='outlined'
sx={{width:'300px',m:1}}
/>
<TextField
label='Last Name'
type='text'
variant='outlined'
sx={{width:'300px',m:1}}
/>
<TextField
label='Phone Number'
type='number'
variant='outlined'
sx={{width:'300px',m:1}}
/>
<TextField
label='Message'
type='text'
variant='outlined'
multiline
rows={4}
sx={{m:1}}
fullWidth
/>
<Button size='large' variant='outlined' type='submit' sx={{m:1}}>Send</Button>


 </>
  )
}

export default ContactUs




