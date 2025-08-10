import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const commemtschema = new Schema(
  {
    content: {
      type: string,
      required: true,
    },
    video: {
      type: Schema.Types.ObjectId,
      ref: "Video",
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
commemtschema.plugin(mongooseAggregatePaginate);
export const Comment = mongoose.model("Comment", commemtschema);
