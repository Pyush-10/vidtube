import mongoose, { Schema } from "mongoose";

const subscriptionschema = new Schema(
  {
    //either of video, comment, or tweet will be assigned others are null
    subscriber: {
      type: Schema.Types.ObjectId, // one who is subscribing
      ref: "User",
    },
    channel: {
      type: Schema.Types.ObjectId, // oen to whom the user is subscribed
      ref: "User",
    },
  },
  {
    timestamps: true,
    // Automatically manage createdAt and updatedAt fields
  }
);
export const Subscription = mongoose.model("Subscription", subscriptionschema);
