const mongoose = require('mongoose');

const siteSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    website: { type: String, required: true },
    username: { type: String, required: true },
    password: { type: String, required: true }
});

module.exports = mongoose.model('Site', siteSchema);
