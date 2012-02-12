/**
 * Show functions to be exported from the design doc.
 */


// Sort objectives by date of creation
exports.OKRs_by_created = {

    map: function (doc) {
		// Include only if the document contains a objective
        if (doc.type === 'OKR') {
            emit(doc.created, doc.goal);
        }
    }
};
