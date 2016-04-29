var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

router.use(bodyParser.json());

router.all('/',function(req,res,next) {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      next();
});

router.get('/',function(req,res,next){
        res.end('Will send all the leaderships to you!');
});

router.post('/',function(req, res, next){
    res.end('Will add the leadership: \n' + req.body.name + ' with details: ' + req.body.description);    
});

router.delete('/',function(req, res, next){
        res.end('Deleting all leaderships');
});


router.all('/:leadershipId',function(req,res,next) {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      next();
});

router.get('/:leadershipId',function(req,res,next){
        res.end('Will send details of the leadership: ' + req.params.leadershipId +' to you!');
});

router.put('/:leadershipId',function(req, res, next){
        res.write('Updating the leadership: \n' + req.params.leadershipId + '\n');
    res.end('Will update the leadership: ' + req.body.name + 
            ' with details: ' + req.body.description);
});

router.delete('/:leadershipId',function(req, res, next){
        res.end('Deleting leadership: ' + req.params.leadershipId);
});

module.exports=router;
