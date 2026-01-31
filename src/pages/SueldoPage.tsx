import { useCallback, useMemo, useState } from "react";
import { Paper, TextField, Typography } from "@mui/material";

export default function SueldoPage() {
  const [sueldo, setSueldo] = useState(0);
  const [primas, setPrimas] = useState(0);
  const [deducciones, setDeducciones] = useState(0); 
  const sueldoneto = useCallback(() => sueldo + primas - deducciones, [sueldo, primas, deducciones]);

  return (
    <Paper sx={{ p: 3, borderRadius: 3 }}>
      <Typography variant="h5" fontWeight={900} gutterBottom>
      Calculadora de Sueldo Neto
      </Typography>

      <TextField
        label="Sueldo Basico"
        type="number"
        value={sueldo}
        onChange={(e) => setSueldo(Number(e.target.value))}
        sx={{ mr: 2, mb: 2 }}
      />

      <TextField
        label="Primas"
        type="number"
        value={primas}
        onChange={(e) => setPrimas(Number(e.target.value))}
        sx={{ mb: 2 }}
      />

      <TextField
        label="Deducciones"
        type="number"
        value={deducciones}
        onChange={(e) => setDeducciones(Number(e.target.value))}
        sx={{ mb: 2 }}
      />

      <Typography sx={{ mt: 1 }}>
        <button onClick={() => alert(`El sueldo neto es: ${sueldoneto()}`)}>Calcular Sueldo Neto</button>
      </Typography>
    </Paper>
  );
}