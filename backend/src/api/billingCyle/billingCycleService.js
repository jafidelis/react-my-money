const BillingCyle = require('./billingCycle');
const errorHandler = require('../common/errorHandler');

BillingCyle.methods(['get', 'post', 'put', 'delete']);
BillingCyle.updateOptions({new: true, runValidators: true});
BillingCyle.after('post', errorHandler).after('put', errorHandler);

BillingCyle.route('count', (req, res, next) => {
    BillingCyle.count((error, value) => {
        if (error) {
            res.status(500).json({errors: [error]});
        } else {
            res.json({value});
        }
    });
});

BillingCyle.route('summary', (req, res, next) => {
    BillingCyle.aggregate(
        {
            $project: { credit: { $sum: '$credits.value' }, debt: { $sum: '$debts.value' } }
        }, {
            $group: { _id: null, credit: { $sum: '$credit' }, debt: { $sum: '$debt' } }
        }, {
            $project: { _id: 0, credit: 1, debt: 1 }
        }
        , (error, result) => {
            if (error) {
                res.status(500).json({ errors: [error] });
            } else {
                res.json(result[0] || { credit: 0, debt: 0 });
            }
        });
});

module.exports = BillingCyle;