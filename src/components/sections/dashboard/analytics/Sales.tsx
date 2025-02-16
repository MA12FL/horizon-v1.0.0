import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

const Sales = () => {
  return (
    <Paper sx={{ px: 2.5, py: 1.5, height: 100 }}>
      <Typography variant="body2" color="text.disabled">
        Sales
      </Typography>
      <Typography variant="h3">$574.34</Typography>
      <Typography variant="caption" color="text.disabled" fontWeight={400}>
        <Typography variant="body2" component="span" color="success.main" fontWeight={700}>
          +23%
        </Typography>{' '}
        since last month
      </Typography>
    </Paper>
  );
};

export default Sales;
