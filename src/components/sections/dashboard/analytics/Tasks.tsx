import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import IconifyIcon from 'components/base/IconifyIcon';

const Tasks = () => {
  return (
    <Stack component={Paper} p={2.5} alignItems="center" spacing={2.25} height={100}>
      <Stack
        alignItems="center"
        justifyContent="center"
        height={56}
        width={56}
        borderRadius="50%"
        sx={(theme) => ({
          background: `linear-gradient(90deg, ${theme.palette.gradients.secondary.main} 0%, ${theme.palette.gradients.secondary.state} 100%)`,
        })}
      >
        <IconifyIcon icon="ic:baseline-add-task" fontSize="h3.fontSize" color="info.lighter" />
      </Stack>
      <div>
        <Typography variant="body2" color="text.disabled" noWrap>
          New Tasks
        </Typography>
        <Typography mt={0.25} variant="h3">
          154
        </Typography>
      </div>
    </Stack>
  );
};

export default Tasks;
