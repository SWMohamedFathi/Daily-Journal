import express from 'express';
import mongoose from 'mongoose';
const app = express();

app.get('/health', (req, res) => {
  res.send({data:{status:"Healthy"}});
});

const dbURL = 'mongodb://localhost:27017';

mongoose
  .connect(dbURL)
  .then((result) => {
    console.log('Connected to MongoDB');
    app.listen(3001, () => {
      console.log('Server started on port 3001');
    });
  })
  .catch((err) => {
    console.error('Could not connect to MongoDB:', err);
  });


app.listen(3000, () => {
    console.log('Server started on port 3000');
  });
export default app;

