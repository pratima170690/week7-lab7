constMessage = require("./model");

// Render Controller: Render index.html with messages using EJS
const renderMessages = async (req, res) => {
  try {
    const messages = awaitMessage.find({});
    res.render("index", { messages }); // Render index.ejs with messages data
  } catch (error) {
    console.error("Error rendering index.html:", error);
    res.status(500).send("Internal Server Error");
  }
};

// get allMessages
const getMessages = async (req, res) => {
  try {
    const messages = awaitMessage.find({});
    res.status(200).json(messages);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Add oneMessage
const addMessage = async (req, res) => {
  try {
    const { sender, recipient, content } = req.body;
    const newMessage = newMessage({ sender, recipient, content });
    await newMessage.save();
    res.status(201).json(newMessage);
  } catch (error) {
    console.error("Error:", error.message);
    res.status(500).json({ message: "try again later" });
  }
};

// Delete allMessages
const deleteAllMessages = async (req, res) => {
  try {
    const result = awaitMessage.deleteMany({});
    res
      .status(200)
      .json({ message: `Deleted ${result.deletedCount} books successfully` });
  } catch (error) {
    console.error("Error:", error.message);
    res.status(500).json({ message: "try again later" });
  }
};

module.exports = {
  getMessages,
  renderMessages,
  addMessage,
  deleteAllMessages,
};