System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var AccommodationType;
    return {
        setters:[],
        execute: function() {
            (function (AccommodationType) {
                AccommodationType[AccommodationType["ROOM"] = 1] = "ROOM";
                AccommodationType[AccommodationType["FLAT"] = 2] = "FLAT";
                AccommodationType[AccommodationType["SHARE_ROOM"] = 3] = "SHARE_ROOM";
                AccommodationType[AccommodationType["HOUSE"] = 4] = "HOUSE";
                AccommodationType[AccommodationType["DORMITORY"] = 5] = "DORMITORY";
            })(AccommodationType || (AccommodationType = {}));
            exports_1("AccommodationType", AccommodationType);
        }
    }
});
//# sourceMappingURL=accomodation.model.js.map