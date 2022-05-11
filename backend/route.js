const router = require('express').Router();
let Cats = require('./cats');

router.route('/').get((req, res) => {
    Cats.find()
        .then(cats => res.json(cats))
        .catch(err => res.status(400).json('Error: ' + err));
})

router.route('/:id').get((req, res) => {
    Cats.findById(req.params.id)
        .then(cats => res.json(cats))
        .catch(err => res.status(400).json('Error: ' + err));
})

router.route('/add').post((req, res) => {
    const name = req.body.name;
    const id = req.body.id;
    const path = req.body.path;
    const description = req.body.description;

    const newCat = new Cats({
        name,
        id,
        path,
        description,
    });

    newCat.save()
        .then(()=> res.json('Cat added'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;