import React from 'react';
import { 
  Card, 
  CardActionArea, 
  CardMedia, 
  Typography, 
  CardContent,
  CardActions, 
  Button 
} from '@material-ui/core';
const Menu = () => {  
    const items = [{
      image: {
        title: 'Image',
        path: '/path',
      },
      title: 'Picture',
      summary: 'Eat this'
    }];

    return (
      <div>
        {items.map(item => (
          <Card>
          <CardActionArea>
            <CardMedia
              image={item.image.path}
              title={item.image.title}
            />
            <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
                {item.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">{item.summary}</Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Add to Cart
            </Button>
            <Button size="small" color="primary">
              Customize
            </Button>
          </CardActions>
          </Card>
        ))}
      </div>
    )
};

export default Menu;