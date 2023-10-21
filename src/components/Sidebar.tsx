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
        backgroundColor: "#f0f0f0",
        height: "calc(100vh - 64px)",
        overflowY: "auto",
      }}
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
