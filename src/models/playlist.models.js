import mongoose, { Schema } from "mongoose";

const playlistschema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },

    videos: [
      {
        type: Schema.Types.ObjectId,
        ref: "Video",
      },
    ],
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
