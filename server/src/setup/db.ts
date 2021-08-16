import config from '../../config';
import mongoose from 'mongoose';

// eslint-disable-next-line max-len
export const connection = mongoose.connect(`mongodb+srv://${config.db.username}:${config.db.password}@cluster0.vmryq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
