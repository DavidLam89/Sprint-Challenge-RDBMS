const router = require('express').Router();
const Project = require('./project-model');

router.post('/', (req, res) => {
    Project.addProject(req.body)
        .then(ids => {
            res.status(201).json(ids[0]);
        })
        .catch(error => {
            res.status(500).json(error);
        });
});

router.get('/:id', (req, res) => {
    Project.getProject(req.params.id)
        .then(project => {
            project ? res.status(200).json(project) : res.status(404).json({ message: 'Project ID not found' });
        })
        .catch(error => {
            res.status(500).json(error);
        });
});

module.exports = router;