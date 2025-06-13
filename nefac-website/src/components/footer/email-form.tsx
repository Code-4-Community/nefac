import { Button, TextField } from "@mui/material";

export default function EmailForm() {
  return (
    <div className="w-full flex flex-col gap-4">
      <div className="flex flex-row gap-4">
        <TextField
          id="fname"
          label="First Name"
          placeholder="First Name"
          variant="outlined"
          fullWidth
          size="small"
          sx={{ bgcolor: 'white', borderRadius: 1 }}
        />
        <TextField
          id="lname"
          label="Last Name"
          placeholder="Last Name"
          variant="outlined"
          fullWidth
          size="small"
          sx={{ bgcolor: 'white', borderRadius: 1 }}
        />
      </div>
      <TextField
        id="email"
        label="Email"
        placeholder="Email"
        variant="outlined"
        fullWidth
        size="small"
        sx={{ bgcolor: 'white', borderRadius: 1, mb: 1 }}
      />
      <Button 
        variant="contained" 
        sx={{ 
          bgcolor: '#1560F1', 
          color: 'white',
          '&:hover': {
            bgcolor: 'white',
            color: '#1560F1'
          }
        }}
      >
        SIGN UP
      </Button>
    </div>
  );
}

