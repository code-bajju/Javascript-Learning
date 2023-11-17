// const express = require('express');
// const app = express();
// const port = process.env.PORT || 3000;

// // Define routes for GET, POST, PUT, and DELETE requests
// app.get('/', (req, res) => {
//   res.send('Hello from REST API!');
// });

// app.post('/data', (req, res) => {
//   const data = req.body;
//   console.log('Received data:', data);
//   res.json({ message: 'Data received successfully' });
// });

// app.put('/data/:id', (req, res) => {
//   const id = req.params.id;
//   const updatedData = req.body;
//   console.log(`Updating data for ID ${id}:`, updatedData);
//   res.json({ message: 'Data updated successfully' });
// });

// app.delete('/data/:id', (req, res) => {
//   const id = req.params.id;
//   console.log(`Deleting data with ID ${id}`);
//   res.json({ message: 'Data deleted successfully' });
// });

// // Start the server
// app.listen(port, () => {
//   console.log(`Server listening on port ${port}`);
// });