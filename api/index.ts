import app from './src/app';
import './src/db';

const PORT = 3001;
app.listen(PORT, () => console.log('Server on port 3001'));
