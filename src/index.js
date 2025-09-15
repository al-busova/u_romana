import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from './components/App';
import { ThemeProvider } from 'styled-components';
import { theme} from './Theme';
import './index.css';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import 'dayjs/locale/uk';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="uk"> */}
      <ThemeProvider theme={theme}>
          <BrowserRouter basename="/u_romana">
            <App />
          </BrowserRouter>{' '}
        </ThemeProvider>{' '}
    {/* </LocalizationProvider> */}
  </React.StrictMode>
);
