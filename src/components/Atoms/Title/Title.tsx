import { Typography } from '@mui/material';

const Title = ({ label }: { label: string }) => {
  return (
    <Typography variant="h1" component="h1" padding="2rem" align="center">
      {label}
    </Typography>
  );
};

export default Title;
