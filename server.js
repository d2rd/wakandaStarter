const express = require('express');

const app = express();

const port = 5001;

app.get('/', (req, res) => {
  res.send('Jambo from Wakanda!'); // sanity check
});
//this is where you define your database
app.get('/api/people', (req, res) => {
  const people = [ 
    {id: 1, firstName: 'T\'Challa', lastName: ', son of T\'Chaka'},
    {id: 6, firstName: 'Ramonda', lastName: ', Queen of Wakanda'},
    {id: 5, firstName: 'Shuri', lastName: ', daughter of T\'Chaka'},
    {id: 8, firstName: 'T\'Chaka', lastName: ', deceased King of Wakanda'},
    {id: 2, firstName: 'Erik', lastName: 'Killmonger'},
    {id: 3, firstName: 'Nakia', lastName: 'Ladzepo'},
    {id: 4, firstName: 'Okoye', lastName: 'Killmonger'},
    {id: 7, firstName: 'Zuri', lastName: 'Milaje'}
  ];
  res.json(people);
});

app.listen(port, () => console.log(`Server started on port ${port}`))