import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const MyBox = () => (
  <Box
    sx={{
      width: 300,
      height: 300,
      backgroundColor: getRandomColor(),
      '&:hover': {
        backgroundColor: 'primary.main',
        opacity: [0.9, 0.8, 0.7],
      },
    }}
  />
);

const MyBoxes = () => {
  const boxes = [];
  for (let i = 0; i < 20; i++) {
    boxes.push(
      <Grid item xs={3} key={i}>
        <MyBox />
      </Grid>
    );
  }
  return (
    <Grid container spacing={3}>
      {boxes}
    </Grid>
  );
};

export default MyBoxes;
