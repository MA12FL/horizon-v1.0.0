import { useState } from 'react';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import Box from '@mui/material/Box';
import IconifyIcon from 'components/base/IconifyIcon';
import SpeedUnitMenu from './SpeedUnitMenu';

interface SpeedUnit {
  id: number;
  name: string;
  unit: string;
}

const speedUnits: SpeedUnit[] = [
  { id: 1, name: 'Meters per second', unit: 'm/s' },
  { id: 2, name: 'Kilometers per hour', unit: 'km/h' },
  { id: 3, name: 'Miles per hour', unit: 'mph' },
  { id: 4, name: 'Knots', unit: 'kn' },
];

const WindSpeedPrediction = () => {
  const [speedUnit, setSpeedUnit] = useState(speedUnits[0]);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = (unit: SpeedUnit) => {
    setSpeedUnit(unit);
    handleMenuClose();
  };

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
          15 {speedUnit.unit}
        </Typography>
      </div>
      <SpeedUnitMenu />
      <Box pr={2}>
        <Stack
          onClick={handleMenuClick}
          direction="row"
          spacing={0.5}
          alignItems="center"
          sx={{ cursor: 'pointer' }}
        >
          <Typography>{speedUnit.name}</Typography>
          <IconifyIcon icon="ri:arrow-down-s-line" color="text.disabled" fontSize={24} />
        </Stack>
        <Menu
          anchorEl={anchorEl}
          id="speed-unit-menu"
          open={open}
          onClose={handleMenuClose}
          sx={{ mt: 0.5, '& .MuiList-root': { width: 190 } }}
          transformOrigin={{ horizontal: 'right', vertical: 'top' }}
          anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        >
          {speedUnits.map((unit) => (
            <MenuItem
              key={unit.id}
              onClick={() => handleMenuItemClick(unit)}
              sx={{ mb: 0.5, bgcolor: speedUnit.id === unit.id ? 'info.main' : null }}
            >
              <ListItemText>
                <Typography>{unit.name}</Typography>
              </ListItemText>
            </MenuItem>
          ))}
        </Menu>
      </Box>
    </Stack>
  );
};

export default WindSpeedPrediction;
