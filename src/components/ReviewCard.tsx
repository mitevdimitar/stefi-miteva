import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function ReviewCard() {
  return (
    <Card sx={{ width: '33%' }}>
      <CardHeader sx={{ textAlign: 'center' }} title="Книжни криле" />
      <CardMedia
        sx={{ padding: '0 12px', cursor: 'pointer' }}
        component="img"
        height="150"
        image={require('../img/Blog1.png')}
        alt="Blog preview"
        onClick={() =>
          window.open(
            'https://knijnikrile.wordpress.com/2021/01/29/%d0%be%d1%81%d0%bc%d0%be%d1%82%d0%be-%d0%ba%d1%80%d0%b0%d0%bb%d1%81%d1%82%d0%b2%d0%be-%d0%be%d1%82-%d1%81%d1%82%d0%b5%d1%84%d0%b0%d0%bd%d0%b8%d1%8f-%d0%bc%d0%b8%d1%82%d0%b5%d0%b2/'
          )
        }
      />
      <CardContent sx={{ padding: 1.5 }}>
        <Typography variant="body2" color="text.secondary" align="justify">
          Стефания Митева е едва на десет, но вече има зад гърба си издадена
          книга. Нещо повече – приказната история „Осмото кралство” се ражда
          докато Стефи е още на седем! Впечатляващо, нали? Нека разлистим заедно
          дебютната приказка на младата писателка
        </Typography>
      </CardContent>
    </Card>
  );
}
