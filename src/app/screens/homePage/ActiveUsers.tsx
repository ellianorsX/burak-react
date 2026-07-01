import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  Stack,
  Typography,
} from "@mui/material";

const activeUsers = [
  { memberNick: "Martin", memberImage: "/img/martin1.webp" },
  { memberNick: "Justin", memberImage: "/img/justin2.png" },
  { memberNick: "Rose", memberImage: "/img/rose3.webp" },
  { memberNick: "Nusret", memberImage: "/img/nusret4.webp" },
];

export default function ActiveUsers() {
  return (
    <div className="active-users-frame">
      <Container>
        <Stack className="main">
          <Box className="category-title">Active Users</Box>

          <Stack
            direction="row"
            spacing={2}
            justifyContent="center"
            flexWrap="wrap"
          >
            {activeUsers.length !== 0 ? (
              activeUsers.map((ele, index) => (
                <Card
                  key={index}
                  sx={{
                    width: 300,
                    borderRadius: "10px",
                    overflow: "hidden",
                  }}
                >
                  <CardMedia
                    component="img"
                    image={ele.memberImage}
                    alt={ele.memberNick}
                    sx={{
                      height: 320,
                      objectFit: "cover",
                    }}
                  />

                  <CardContent>
                    <Typography align="center">{ele.memberNick}</Typography>
                  </CardContent>
                </Card>
              ))
            ) : (
              <Box>No Active Users!</Box>
            )}
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}
