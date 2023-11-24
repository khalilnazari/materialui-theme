import { Inbox, Mail } from "@mui/icons-material";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

const Sidebar = () => {
  return (
    <Box
      sx={{
        width: "300px",
        height: "calc(100vh - 64px)",
        overflowY: "auto",
        position: "sticky",
      }}
      bgcolor={"background.paper"}
      color={"text.primary"}
    >
      <List>
        {["Dashboard", "Tickets", "Projects", "Groups"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <Inbox /> : <Mail />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Sidebar;
