const mongoose = require("mongoose");

const insuranceSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    simage: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    coverage: {
      type: [String],
      default: [],
    },
    benefits: {
      type: [String],
      default: [],
    },
    eligibility: {
      type: String,
      required: true,
    },
    claimProcess: {
      type: String,
      required: true,
    },
    premiumInfo: {
      type: String,
      required: true,
    },
    whyBuy: {
      type: String,
      required: true,
    },
    idealFor: {
      type: String,
      required: true,
    },
    exclusions: {
      type: [String],
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Insurance", insuranceSchema);
