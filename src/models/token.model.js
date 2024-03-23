"use strict";
/* -------------------------------------------------------
    EXPRESS - Personnel API
------------------------------------------------------- */
const { mongoose } = require("../configs/dbConnection");
/* ------------------------------------------------------- *
{
    "userId": "65343222b67e9681f937f001",
    "token": "...tokenKey..."
  }
/* ------------------------------------------------------- */

// TOKEN MODEL:
const TokenSchema = new mongoose.Schema({

    //! Bu iki yapı en çok sorgulanacak yapı olduğu için index kullanıyoruz

    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Personnel",
        required: true,
        index: true,
    },

    token: {
        type: String,
        trim: true,
        required: true,
        index: true,
        unique: true,
    },

}, {
    collection: "tokens",
    timestamps: true
})
/* ------------------------------------------------------- */

module.exports = mongoose.model("Token", TokenSchema)


