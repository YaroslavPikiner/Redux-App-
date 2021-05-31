import * as React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Slots from '../slots'

const FilmCard = ({currentDay, handleChangeTime, isDisabled}) => {

  return (
    <Card sx={{ maxWidth: 500 }}>
      <CardMedia
        component="img"
        alt="Contemplative Reptile"
        height="140"
        image="https://m.media-amazon.com/images/M/MV5BYTRiNDQwYzAtMzVlZS00NTI5LWJjYjUtMzkwNTUzMWMxZTllXkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_UY268_CR7,0,182,268_AL_.jpg"
        title="Contemplative Reptile"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Game of Thrones
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
          <Slots isDisabled={isDisabled} currentDay={currentDay} handleChangeTime={handleChangeTime}/>
        </ButtonGroup>
      </CardActions>
    </Card>
  );
}

export default FilmCard