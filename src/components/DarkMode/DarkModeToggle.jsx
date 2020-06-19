import React from 'react';
import { useHistory } from "react-router-dom";
import Toggle from './Toggle';
import useDarkMode from 'use-dark-mode';
import './backButton.scss'

const DarkModeToggle = () => {
  const darkMode = useDarkMode(false);

  // back button working
  let history = useHistory();

  return (
    <div className="dark-mode-toggle">
      <div className="backButton"
        onClick={() => history.goBack()} >
        <i class="fa fa-arrow-left my-float"
          style={{ marginTop: '22px' }}></i>
      </div>
      <button type="button" onClick={darkMode.disable}>
        ☀
      </button>
      <Toggle checked={darkMode.value} onChange={darkMode.toggle} />
      <button type="button" onClick={darkMode.enable}>
        ☾
      </button>
    </div>
  );
};

export default DarkModeToggle;