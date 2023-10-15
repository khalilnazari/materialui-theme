import { Box, Divider, Typography } from "@mui/material";

const TypographyComponent = () => {
  return (
    <Box>
      <Typography variant="h1" gutterBottom>
        This is heading 1
      </Typography>
      <Typography variant="h2" gutterBottom>
        This is heading 2
      </Typography>
      <Typography variant="h3" gutterBottom>
        This is heading 3
      </Typography>
      <Typography variant="h4" gutterBottom>
        This is heading 4
      </Typography>
      <Typography variant="h5" gutterBottom>
        This is heading 5
      </Typography>
      <Typography variant="h6" gutterBottom>
        This is heading 6
      </Typography>

      <Divider />
      <Typography gutterBottom variant="subtitle1">
        Subtitle 1 : Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Cum, numquam?
      </Typography>
      <Typography gutterBottom variant="subtitle2">
        Subtitle 2 : Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Cum, numquam?
      </Typography>
      <Divider />

      <Typography variant="body1" gutterBottom>
        body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur unde suscipit, quam beatae rerum inventore
        consectetur, neque doloribus, cupiditate numquam dignissimos laborum
        fugiat deleniti? Eum quasi quidem quibusdam.
      </Typography>
      <Typography variant="body2" gutterBottom>
        body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur unde suscipit, quam beatae rerum inventore
        consectetur, neque doloribus, cupiditate numquam dignissimos laborum
        fugiat deleniti? Eum quasi quidem quibusdam.
      </Typography>
      <Divider />
      <Typography variant="button" display="block" gutterBottom>
        button text
      </Typography>
      <Typography variant="caption" display="block" gutterBottom>
        caption text
      </Typography>
      <Typography variant="overline" display="block" gutterBottom>
        overline text
      </Typography>
    </Box>
  );
};

export default TypographyComponent;
