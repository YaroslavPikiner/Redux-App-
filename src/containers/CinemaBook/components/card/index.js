import * as React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Slots from '../slots'

const FilmCard = ({time, handleChangeTime, isDisabled}) => {

  return (
    <Card sx={{ maxWidth: 500 }}>
      <CardMedia
        component="img"
        alt="Contemplative Reptile"
        height="140"
        image="https://www.tourdom.ru/upload/iblock/c64/c6409a8ca01ce789ad8d541dc7e87f4c.jpeg"
        title="Contemplative Reptile"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Borat
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Borat leaves his native Kazakhstan and is sent by order of the "Ministry of Information of Kazakhstan"
          together with his producer Azamat Bagatov to the United States to create a documentary film-reportage.
          He leaves at home in his native Kushkek his mother, wife Oksana, sister-prostitute, half-witted brother
          Bilo, and flies to the USA.
        </Typography>
      </CardContent>
      <CardActions>
        <ButtonGroup size="large" color="primary" aria-label="large outlined primary button group">
          <Slots isDisabled={isDisabled} time={time} handleChangeTime={handleChangeTime}/>
        </ButtonGroup>
      </CardActions>
    </Card>
  );
}

export default FilmCard