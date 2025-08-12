import mongoose, { Schema } from "mongoose";

const likeschema = new Schema(
  {
    //either of video, comment, or tweet will be assigned others are null
    videos: {
      type: Schema.Types.ObjectId,
      ref: "Video",
    },
    comment: {
      type: Schema.Types.ObjectId,
      ref: "Comment",
    },

    tweet: [
      {
        type: Schema.Types.ObjectId,
        ref: "Tweet",
      },
    ],
    likedby: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
    // Automatically manage createdAt and updatedAt fields
  }
);
export const Like = mongoose.model("Like", likeschema);
