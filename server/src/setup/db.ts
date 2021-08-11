import config from "../../config";
import * as mongoose from "mongoose";

export const connection = mongoose.connect(`mongodb+srv://${config.db.username}:${config.db.password}@cluster0.vmryq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
