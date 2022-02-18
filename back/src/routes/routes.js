const { Router } = require('express');
const EmailController = require('../controllers/EmailController');

const router = Router();

// Email Controller
router.get('/email', EmailController.index);
router.get('/email/:id', EmailController.show);
router.post('/email', EmailController.create);
router.put('/email/:id', EmailController.update);
router.delete('/email/:id', EmailController.destroy);

module.exports = router;