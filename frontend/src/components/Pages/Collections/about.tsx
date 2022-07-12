import { Box, Typography } from '@mui/material';
import style from './about.module.scss';

interface AboutProp {
  status: boolean;
  wallet?: string;
  label?: string;
  likes?: string;
  name: string;
  followers?: string;
  description?: string;
}
const About: React.FC<AboutProp> = ({
  status,
  wallet,
  likes,
  name,
  followers,
  label,
  description,
}) => {
  return (
    <Box className={style.about_container}>
      <Box className={style.stats}>
        <div className={style.likes}>
          <img src="/icons/collections/star-fill.svg" alt="star" />
          
            <b>{likes || 0} <span>likes</span></b>

        </div>
          
        <Typography sx={{marginLeft: '32px'}} variant="body2">{followers || 0} Followers</Typography>
        <Typography variant="body2">wallet address {wallet || 'NA'}</Typography>
      </Box>
      <Box>
      <Typography variant="h2">
              {name}
              <img src="/icons/collections/edit.png" alt="edit" />
            </Typography>

      </Box>
      <Box className={style.description}>
        <Box>
          <Typography variant="body1">{label} </Typography>
          <Typography variant="body1">{description || 0}</Typography>
        </Box>

        <img src="/icons/collections/edit.png" alt="edit" />
      </Box>

      <Box className={style.status}>
        <Typography variant="body1"><b>Status: </b></Typography>
        <Box display='flex' alignItems='center'>
          <Box className={status ?style.active : style.nonActive} />
          <Typography variant="body1">{status ? 'Active': 'Non Active'}</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default About;
