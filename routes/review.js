const express = require("express");
const router = express.Router({ mergeParams: true });

const wrapAsync = require("../util/wrapAsync.js");

const { isLoggedIn, validateReview, isreviewAuthor } = require("../middleware.js");

const reviewController = require("../controllers/reviews.js");

// POST REVIEW ROUTE
router.post(
    "/",
    isLoggedIn,
    validateReview,
    wrapAsync(reviewController.createReview)
);

// DELETE REVIEW ROUTE
router.delete(
    "/:reviewId",
    isLoggedIn,
    isreviewAuthor,
    wrapAsync(reviewController.destroyReview)
);

module.exports = router;