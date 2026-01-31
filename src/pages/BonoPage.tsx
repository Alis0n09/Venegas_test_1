import { useState, useRef } from "react";
import { Paper, TextField, Typography, Button, Select } from "@mui/material";

export default function BonoPage() {
  const sueldoDiarioRef = useRef<HTMLInputElement>(null);
  const diasVacacionesRef = useRef<HTMLInputElement>(null);
  const [bono, setBono] = useState(0);

  const calcularBono = () => {
    const sueldoDiario = Number(sueldoDiarioRef.current?.value || 0);
    const diasVacaciones = Number(diasVacacionesRef.current?.value || 0);
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

      <Select label="Dias" value={diasVacacionesRef}>
        <option value={5}>5</option>
        <option value={10}>10</option>
        <option value={15}>15</option>
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