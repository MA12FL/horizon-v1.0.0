import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import SpeedUnitMenu from './SpeedUnitMenu';

const WindSpeedPrediction = () => {
  return (
    <Stack
      component={Paper}
      alignItems="center"
      justifyContent="space-between"
      p={2.5}
      height={100}
    >
      <div>
        <Typography variant="body2" color="text.disabled">
          Predicted Wind Speed
        </Typography>
        <Typography mt={0.25} variant="h3">
          15 m/s
        </Typography>
      </div>
      <SpeedUnitMenu />
    </Stack>
  );
};

export default WindSpeedPrediction;
