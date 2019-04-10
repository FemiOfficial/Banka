/* eslint-disable no-console */
import express from 'express';
import bodyParser from 'body-parser';
import UserRoute from './routes/user.auh.routes';

require('dotenv').config();

const app = express();


// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Routes
app.use('/api/v1/auth', UserRoute);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`App is running from PORT ${PORT}`));

export default app;