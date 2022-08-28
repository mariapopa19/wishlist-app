import Typography from '@mui/material/Typography';

export default function Footer(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      {'by Hubati Cristian-Alexandru and Popa Maria '}
      {' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}