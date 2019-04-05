const router = require('express').Router();
const Action = require('./action-model');

router.post('/', (req, res) => {
    Action.addAction(req.body)
        .then(ids => {
            res.status(201).json(ids[0]);
        })
        .catch(error => {
            res.status(500).json(error);
        });
});

module.exports = router;