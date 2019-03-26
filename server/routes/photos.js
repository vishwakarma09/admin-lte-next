const express = require("express");
const router = express.Router();
const Photos = require("../models/photoModel");

router.post("/", (req, res) => {
    if (req.body.searchPhrase !== '') {
        var myWhere = {
            title: '/' + req.body.searchPhrase + '/'
        };
    } else {
        var myWhere = {};
    }

    console.log(myWhere);

    var mySort = {
        id: 1
    };

    var current = req.body.current !== undefined ? parseInt(req.body.current) : 1;
    var rowCount = req.body.rowCount !== undefined ? parseInt(req.body.rowCount) : 10;

    console.log('current is ' + current)
    console.log('rowCount is ' + rowCount)

    Promise.all([
        Photos.find(myWhere)
            .sort(mySort),
        Photos.find(myWhere)
            .sort(mySort)
            .skip((current - 1) * rowCount)
            .limit(rowCount)
    ]).then(([total_set, limited_set]) => {
        res.json({
            current: current,
            rowCount: rowCount,
            total: total_set.length,
            rows: limited_set
        });
    });
});

router.use("/:id", (req, res, next) => {
    console.log(req.params.id);
    Photos.findOne({ id: req.params.id }, (err, photo) => {
        if (err) res.status(500).send(err);
        else req.photo = photo;
        next();
    });
});

router
    .get("/:id", (req, res) => {
        return res.json(req.photo);
    })
    .put("/:id", (req, res) => {
        Object.keys(req.body).map(key => {
            req.photo[key] = req.body[key];
        });
        req.photo.save();
        res.json(req.photo);
    });
module.exports = router;
