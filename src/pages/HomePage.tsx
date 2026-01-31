import { Box, Card, CardContent, Typography } from "@mui/material";

const HomePage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#f5f5f5",
        padding: 2,
      }}
    >
      <Box
        component="img"
        src="https://static.vecteezy.com/system/resources/previews/007/033/150/non_2x/group-of-users-people-icon-group-team-vector.jpg"
        sx={{
          width: 500,
          height: 500,
          marginBottom: 4,
        }}
      />

        <Card sx={{ flex: 1, textAlign: "rigth" }}>
          <CardContent>
            <Typography variant="h6">Usarios</Typography>
            <Typography variant="body2" color="text.secondary">
                Usuarios
            </Typography>
          </CardContent>
        </Card>


        <Card sx={{ flex: 1, textAlign: "rigth" }}>
          <CardContent>
            <Typography variant="h6">Sueldo</Typography>
            <Typography variant="body2" color="text.secondary">
              Sueldo
            </Typography>
          </CardContent>
        </Card>


        <Card sx={{ flex: 1, textAlign: "rigth" }}>
          <CardContent>
            <Typography variant="h6">Bono</Typography>
            <Typography variant="body2" color="text.secondary">
              Bono
            </Typography>
          </CardContent>
        </Card>
      </Box>
  );
};

export default HomePage;