import { FC } from 'react';
import LaunchIcon from '@mui/icons-material/Launch';
import { Link } from '@mui/material';
import { ITagLink } from '../../types/types.ts';

const TagLink: FC<ITagLink> = ({ to }) => {
  return (
    <Link
      href={`https://stackoverflow.com/questions/tagged/${to}`}
      target="_blank"
      rel="noreferrer"
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        textDecoration: 'none',
      }}
    >
      see posts <LaunchIcon fontSize="small" />
    </Link>
  );
};

export default TagLink;