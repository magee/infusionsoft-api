module.exports = InvoicePayment = require('typedef')

// THIS CODE WAS GENERATED BY AN AUTOMATED TOOL. Editing it is not recommended.
// For more information, see http://github.com/bvalosek/grunt-infusionsoft
// Generated on Fri Aug 09 2013 13:46:55 GMT-0500 (CDT)

// This table holds one entry for each payment towards a particular invoice.
.class('InvoicePayment') .define({

    __static__field__number__read__Id:
        'Id',

    __static__field__number__read__InvoiceId:
        'InvoiceId',

    __static__field__number__read__Amt:
        'Amt',

    __static__field__datetime__read__PayDate:
        'PayDate',

    __static__field__string__read__PayStatus:
        'PayStatus',

    __static__field__number__read__PaymentId:
        'PaymentId',

    __static__field__number__read__SkipCommission:
        'SkipCommission'

});