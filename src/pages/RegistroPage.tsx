import { Paper,TextField, Typography } from "@mui/material";

export default function RegistroPage() {
  return (
    <Paper sx={{ p: 3, borderRadius: 3 }}>
      <Typography variant="h5" fontWeight={900} gutterBottom>
        Registro de Usuarios
      </Typography>

      <TextField label="Nombre"></TextField>
      <TextField label="Edad"></TextField>
      <TextField label="Developer"></TextField>

      <Typography sx={{ mt: 2 }}>
        ¡Formulario de registro completo
      </Typography>

    </Paper>
  );
}