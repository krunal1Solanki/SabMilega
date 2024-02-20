const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  shopName: {
    type: String,
    required: true
  },
  shopAddress: {
    type: String,
    required: true
  },
  gstNumber: {
    type: String
  },
  phoneNumber: {
    type: String
  },
  profilePicture: {
    type: String  // Assuming you store the path or URL of the image
  },
  companyLogo: {
    type: String  // Assuming you store the path or URL of the image
  }
});

const sellerModel = mongoose.models.sellerModel || mongoose.model("sellerModel", schema);

export default sellerModel;

