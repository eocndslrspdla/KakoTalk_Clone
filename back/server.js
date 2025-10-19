const express = require('express');
const authRoutes = require('./routes/auth');
const cors = require('cors');

const app = express();

app.use(cors({
  origin: 'http://localhost:3000', credentials : true
}));

app.use(express.json());
app.use('/api', authRoutes);

app.listen(3001, () => {
  console.log('Server running on port 3001');
});
