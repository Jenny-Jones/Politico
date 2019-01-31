const express = require('express');
const app = express();
const parties = require('./db/parties');

const port = process.env.PORT || 3000;

const apiVersion = '/api/v1/';

app.get('/', (req, res) => {
    res.send('server is active');
});

// get political parties
app.get(`${apiVersion}parties`, (req, res) => {
    if (parties.length > 0)
    return res.status(200).send({
        status: 200,
        parties,
        message: 'All the Parties',
    })
    return res.status(400).send({
        message: 'Database is empty!',
    })
});

// get single party
app.get(`${apiVersion}parties/:id`, (req, res) => {
    const findParty = parties.filter(party => party.id === parseInt(req.params.id, 10));
    if (findParty) {
        return res.status(200).send({
            party: findParty,
            message: 'gotten a single party',
        });
    }
    return res.status(400).send({
        message: 'party not found',
    });
});


app.listen(port, () => console.log(`app is running on port ${port}`));