import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());

app.get('/api', (req, res) => {
  res.json({ message: 'Hello from Backend 🌐' });
});

app.listen(5000, () => console.log('✅ Backend running on port 5000'));
