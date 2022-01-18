import express from 'express';
import exphbs from 'express-handlebars';
import indexRoutes from "./routes/index.routs";
import path from 'path';

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs({
  layoutsDir: path.join(app.get('views'), 'layouts'),
  defaultLayout: 'main',
  extname: ".hbs"
}));

// Routes
app.use(indexRoutes);

export default app;