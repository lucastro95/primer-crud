import app from './app';
import './database';
import { PORT } from "./config";

// Check Server
app.listen(PORT);
console.log('Server on port', PORT);