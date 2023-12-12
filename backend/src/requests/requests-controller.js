var requestsService = require("./requests-service");

var getAllRequestsController = async (req, res) => {
  try {
    var requests = await requestsService.getAllRequests();
    res.send(requests);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "error fetching requests" });
  }
};

var saveRequestController = async (req, res) => {
  try {
    var status = await requestsService.saveRequestService(req.body);

    if (status) {
      res.send({ status: true, message: "request stored successfully :)" });
    } else {
      res.send({ status: false, message: "error saving request :(" });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getAllRequestsController, saveRequestController };
