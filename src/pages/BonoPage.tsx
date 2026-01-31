import { useState, useRef } from "react";
import { Paper, TextField, Typography, Button, Select, MenuItem } from "@mui/material";

export default function BonoPage() {
  const sueldoDiarioRef = useRef<HTMLInputElement>(null);
  const [diasVacaciones, setDiasVacaciones] = useState<number>(5);
  const [bono, setBono] = useState(0);

  const calcularBono = () => {
    const sueldoDiario = Number(sueldoDiarioRef.current?.value || 0);
    setBono(sueldoDiario * diasVacaciones);
  };

  return (
    <Paper sx={{ p: 3, borderRadius: 3 }}>
      <Typography variant="h5" fontWeight={900} gutterBottom>
        Bono Vacacional
      </Typography>

      <TextField
        label="Sueldo Diario"
        type="number"
        inputRef={sueldoDiarioRef}
        sx={{ mr: 2, mb: 2 }}
      />

      <Select
        label="Días"
        value={diasVacaciones}
        onChange={(e) => setDiasVacaciones(Number(e.target.value))}
        sx={{ mr: 2, mb: 2, minWidth: 120 }}
      >
        <MenuItem value={5}>5</MenuItem>
        <MenuItem value={10}>10</MenuItem>
        <MenuItem value={15}>15</MenuItem>
      </Select>

      <Button variant="contained" onClick={calcularBono} sx={{ mb: 2 }}>
        Calcular Bono
      </Button>

      <Typography variant="h6" fontWeight={700}>
        Bono Vacacional: ${bono.toFixed(2)}
      </Typography>
    </Paper>
  );
}