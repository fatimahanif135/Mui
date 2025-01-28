import { Card, CardContent, CardMedia, Stack, Typography } from "@mui/material"


const CakeSection = () => {
  return (
    <>
    <Typography variant="h4" mt={6} mb={6} >Cakes</Typography>
    <Stack direction='row' justifyContent='space-evenly' sx={{flexWrap:'wrap'}}>

    <Card sx={{ maxWidth:'300px', mb:2 }}>
      <CardMedia
        sx={{ height: 200 }}
        image="/cake.png"
        title="green iguana"
      />
      <CardContent>
        <Typography variant="h5" >
   Onlyy Cake
        </Typography>
      
      </CardContent>
    
    </Card>
    <Card sx={{ maxWidth:'300px', mb:2 }}>
      <CardMedia
        sx={{ height: 200 }}
        image="/cake.png"
        title="green iguana"
      />
      <CardContent>
        <Typography variant="h5" >
      cake name
        </Typography>
      
      </CardContent>
    
    </Card>
    <Card sx={{ maxWidth:'300px', mb:2 }}>
      <CardMedia
        sx={{ height: 200 }}
        image="/cake.png"
        title="green iguana"
      />
      <CardContent>
        <Typography variant="h4" mt={6} color="#84563C" >
      cake name
        </Typography>
       
      
      </CardContent>
    
    </Card>


    <Card sx={{ maxWidth:'300px', mb:2 }}>
      <CardMedia
        sx={{ height: 200 }}
        image="/cake.png"
        title="green iguana"
      />
      <CardContent>
        <Typography variant="h5" >
      cake name
        </Typography>
      
      </CardContent>
    
    </Card>
    <Card sx={{ maxWidth:'300px', mb:2 }}>
      <CardMedia
        sx={{ height: 200 }}
        image="/cake.png"
        title="green iguana"
      />
      <CardContent>
        <Typography variant="h5" >
      cake name
        </Typography>
      
      </CardContent>
    
    </Card>
    <Card sx={{ maxWidth:'300px', mb:2 }}>
      <CardMedia
        sx={{ height: 200 }}
        image="/cake.png"
        title="green iguana"
      />
      <CardContent>
        <Typography variant="h5" >
      cake name
        </Typography>

      
      </CardContent>
    
    </Card>
    </Stack>
    
    
    </>
  )
}

export default CakeSection
