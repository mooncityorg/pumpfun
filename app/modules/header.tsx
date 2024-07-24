import {
  AppBar,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material"
import { Menu } from "@mui/icons-material"
import Reload from "./btn-reload"
import Image from "next/image"

export default function Header() {
  return (
    <AppBar>
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <Menu />
        </IconButton>
        <Image
          src={'/icon.png'}
          width={40}
          height={40}
          alt={'pumpfun'}
        />
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          PumpFun
        </Typography>
        <Reload />
      </Toolbar>
    </AppBar>
  )
}
