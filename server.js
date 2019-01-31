const express = require('express');
const app = express();
const parties = require('./db/parties');
const offices = require('./db/offices');

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

// get political offices
app.get(`${apiVersion}offices`, (req, res) => {
    if (offices.length > 0)
    return res.status(200).send({
        status: 200,
        offices,
        message: 'All the available offices',
    })
    return res.status(400).send({
        message: 'Database is empty!',
    })
});

// get a single office
app.get(`${apiVersion}offices/:id`, (req, res) => {
    const findOffice = offices.filter(office => office.id === parseInt(req.params.id, 10));
    if (findOffice) {
        return res.status(200).send({
            office: findOffice,
            message: 'gotten a single office',
        });
    }
    return res.status(400).send({
        message: 'office not found',
    });
});

app.listen(port, () => console.log(`app is running on port ${port}`));