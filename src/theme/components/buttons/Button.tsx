import { Theme } from '@mui/material';
import { Components } from '@mui/material/styles/components';

const Button: Components<Omit<Theme, 'components'>>['MuiButton'] = {
  defaultProps: {
    disableElevation: true,
  },
  styleOverrides: {
    root: ({ theme }) => ({
      color: theme.palette.info.light,
      borderRadius: theme.shape.borderRadius * 4,
      textTransform: 'initial',
    }),
    text: ({ theme }) => ({
      color: theme.palette.text.disabled,
      backgroundColor: 'transparent !important',
      fontWeight: 500,
    }),
    containedPrimary: ({ theme }) => ({
      color: theme.palette.info.light,
      backgroundColor: theme.palette.primary.main,
      '&:hover': { backgroundColor: theme.palette.primary.main },
    }),
    containedSecondary: ({ theme }) => ({
      color: theme.palette.text.primary,
      backgroundColor: theme.palette.info.dark,
      '&:hover': { backgroundColor: theme.palette.info.dark },
    }),
    sizeLarge: ({ theme }) => ({
      padding: theme.spacing(1.25, 3),
      fontSize: theme.typography.body1.fontSize,
    }),
    sizeMedium: ({ theme }) => ({
      padding: theme.spacing(1, 2.75),
      fontSize: theme.typography.body1.fontSize,
    }),
    sizeSmall: ({ theme }) => ({
      padding: theme.spacing(0.75, 2.35),
      fontSize: theme.typography.caption.fontSize,
      fontWeight: 600,
    }),
    startIcon: {
      marginRight: 6,
    },
    endIcon: {
      marginLeft: 6,
    },
  },
};

export default Button;
