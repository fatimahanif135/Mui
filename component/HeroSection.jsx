import { Box, Button, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import Cake from '../public/images.jpg'


const HeroSection = () => {
  return (
   <Grid container direction='row' alignItems='center'>
    <Grid item xs={12} sm={6} order={{xs:2,sm:1}}>
        <Typography variant='h3' color='inherit'>
            A bliss in every bytes
        </Typography>
        <Typography variant='h' color='inherit'>
          We offer tasty cakes and sweets for you.
        </Typography>
        <Button size='medium' color='secondary' variant='contained' sx={{borderRadius:5}}>
Don't call us
        </Button>

    </Grid>
    <Grid container item xs={12} sm={6} justifyContent='center' order={{xs:1,sm:2}} >
        <Box >
        
        <Image src={Cake} alt="Cake"  />
        </Box>
    </Grid>
     
   </Grid>
  )
}

export default HeroSection