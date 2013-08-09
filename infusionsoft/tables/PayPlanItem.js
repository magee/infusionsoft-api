module.exports = PayPlanItem = require('typedef')

// THIS CODE WAS GENERATED BY AN AUTOMATED TOOL. Editing it is not recommended.
// For more information, see http://github.com/bvalosek/grunt-infusionsoft
// Generated on Fri Aug 09 2013 13:46:55 GMT-0500 (CDT)

// This table holds the data that tells our system what portion of a payment plan
// is due on each date.
.class('PayPlanItem') .define({

    __static__field__number__read__Id:
        'Id',

    __static__field__number__read__PayPlanId:
        'PayPlanId',

    __static__field__datetime__read__DateDue:
        'DateDue',

    __static__field__number__read__AmtDue:
        'AmtDue',

    __static__field__number__read__Status:
        'Status',

    __static__field__number__read__AmtPaid:
        'AmtPaid'

});