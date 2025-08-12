import mongoose, { Schema } from "mongoose";

const tweetchema = new Schema(
  {
    //either of video, comment, or tweet will be assigned others are null
    content: {
      type: String,
      required: true,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
    // Automatically manage createdAt and updatedAt fields
  }
);
export const Playlist = mongoose.model("Playlist", playlistschema);
