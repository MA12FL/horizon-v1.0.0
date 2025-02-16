import { Theme } from '@mui/material';
import { Components } from '@mui/material/styles/components';
import customShadows from 'theme/shadows';

const Paper: Components<Omit<Theme, 'components'>>['MuiPaper'] = {
  styleOverrides: {
    root: ({ theme }) => ({
      padding: theme.spacing(3.5),
      backgroundColor: theme.palette.info.lighter,
      borderRadius: theme.shape.borderRadius * 5,
      boxShadow: 'none',

      '&.MuiMenu-paper': {
        padding: 0,
        boxShadow: customShadows[0],
        borderRadius: theme.shape.borderRadius * 2.5,
      },
    }),
  },
};

export default Paper;
