import { Box } from '@mui/material'
import {
  ItemsList,
  ItemsListProfile,
  List,
  ListProfile,
  TextField,
  classes,
} from './Header'

import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded'
import SearchIcon from '@mui/icons-material/Search'
import HomeRoundedIcon from '@mui/icons-material/HomeRounded'
import OndemandVideoRoundedIcon from '@mui/icons-material/OndemandVideoRounded'
import StoreRoundedIcon from '@mui/icons-material/StoreRounded'
import GroupsRoundedIcon from '@mui/icons-material/GroupsRounded'
import VideogameAssetRoundedIcon from '@mui/icons-material/VideogameAssetRounded'
import AppsRoundedIcon from '@mui/icons-material/AppsRounded'
import { FaFacebookMessenger } from 'react-icons/fa6'
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded'
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded'

const Header = () => {
  return (
    <Box sx={classes.Container}>
      <Box sx={classes.Logo}>
        <FacebookRoundedIcon sx={classes.IconLogo} />
        <Box sx={classes.InputSearch}>
          <SearchIcon sx={classes.IconSearch} />
          <TextField placeholder="Search in Facebook"></TextField>
        </Box>
      </Box>
      <Box sx={classes.Menu}>
        <List>
          <ItemsList>
            <HomeRoundedIcon />
          </ItemsList>
          <ItemsList>
            <OndemandVideoRoundedIcon />
          </ItemsList>
          <ItemsList>
            <StoreRoundedIcon />
          </ItemsList>
          <ItemsList>
            <GroupsRoundedIcon />
          </ItemsList>
          <ItemsList>
            <VideogameAssetRoundedIcon />
          </ItemsList>
        </List>
      </Box>
      <Box sx={classes.Profile}>
        <ListProfile>
          <ItemsListProfile>
            <AppsRoundedIcon sx={classes.Icons} />
          </ItemsListProfile>
          <ItemsListProfile>
            <FaFacebookMessenger style={classes.Icons} />
          </ItemsListProfile>
          <ItemsListProfile>
            <NotificationsRoundedIcon sx={classes.Icons} />
          </ItemsListProfile>
          <ItemsListProfile>
            <AccountCircleRoundedIcon sx={classes.Icons} />
          </ItemsListProfile>
        </ListProfile>
      </Box>
    </Box>
  )
}

export default Header
