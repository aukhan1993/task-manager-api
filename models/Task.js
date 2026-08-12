
const mongoose = require('mongoose');

// Define the rules for our Task data
const taskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Please provide a task title'],
      trim: true, // Removes accidental white spaces at the beginning or end
    },
    completed: {
      type: Boolean,
      default: false, // By default, a new task is not completed
    },
  },
  { 
    timestamps: true // Automatically creates 'createdAt' and 'updatedAt' fields
  }
);

// Export the model so we can use it in other files
module.exports = mongoose.model('Task', taskSchema);