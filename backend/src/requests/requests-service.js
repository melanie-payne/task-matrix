var requestModel = require("./requests-model");

module.exports.getAllRequests = async () => {
  try {
    var requests = await requestModel.find({});
    return requests;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

var requestModel = require("./requests-model");

module.exports.saveRequestService = async (requestDetails) => {
  try {
    var requestModelData = new requestModel();
    requestModelData.user = requestDetails.user;
    requestModelData.movie = requestDetails.movie;
    requestModelData.collaborators = requestDetails.collaborators;
    requestModelData.progress = requestDetails.progress;

    // Use await to wait for the save operation to complete
    await requestModelData.save();

    return true; // Return a resolved promise if save was successful
  } catch (error) {
    console.log(error);
    throw error; // Rethrow the error to propagate it
  }
};
