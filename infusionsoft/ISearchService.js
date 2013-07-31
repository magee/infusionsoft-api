module.exports = ISearchService = require('typedef')

// The SearchService allows you to retrieve the results of saved searches and
// reports that have been saved within Infusionsoft. Saved searches/reports
// are tied to the User that created them. This service also allows you to
// utilize the quick search function found in the upper right hand corner of
// your Infusionsoft application.

// THIS CODE WAS GENERATED BY A TOOL. Editing it is not recommended.
// For more information, see http://github.com/bvalosek/infusionsoft-api

.interface('ISearchService') .define({

    // Gets all possible fields/columns available for return on a saved
    // search/report
    __xmlrpc__getAllReportColumns: function(savedSearchId, userId) {},

    // Runs a saved search/report and returns all possible fields
    __xmlrpc__getSavedSearchResultsAllFields: function(savedSearchId,
        userId, pageNumber) {},

    // Runs a saved search/report returning only the specified fields
    __xmlrpc__getSavedSearchResults: function(savedSearchId, userId,
        pageNumber, returnFields) {},

    // This is used to find what possible quick searches the given user has
    // access to
    __xmlrpc__getAvailableQuickSearches: function(userId) {},

    // This allows you to run a quick search via the API. The quick search is
    // the search bar in the upper right hand corner of the Infusionsoft
    // application
    __xmlrpc__quickSearch: function(quickSearchType, userId, searchData,
        page, returnLimit) {},

    // Retrieves the quick search type that the given users has set as their
    // default
    __xmlrpc__getDefaultQuickSearch: function(userId) {}

});