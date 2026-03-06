const express = require('express');
const router = express.Router();
const { getAll, getById, getByFiscalYear, create, update, remove } = require('../controllers/financialResultController');
const { protect } = require('../middleware/auth');

router.get('/', getAll);
router.get('/by-fy/:fiscalYear', getByFiscalYear);
router.get('/:id', getById);
router.post('/', protect, create);
router.put('/:id', protect, update);
router.delete('/:id', protect, remove);

module.exports = router;
