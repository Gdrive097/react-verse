// Settings.jsx

import React, { useState } from 'react';

const Settings = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [username, setUsername] = useState('JohnDoe');

  const handleSave = () => {
    const settings = {
      darkMode,
      emailNotifications,
      username,
    };

    // Here you could send to a server via fetch/Axios
    console.log('Saving settings:', settings);
    alert('Settings saved!');
  };

  return (
    <div className="settings-page" style={{ padding: '20px' }}>
      <h2>Settings</h2>

      <div style={{ marginBottom: '15px' }}>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={e => setUsername(e.target.value)}
            style={{ marginLeft: '10px' }}
          />
        </label>
      </div>

      <div style={{ marginBottom: '15px' }}>
        <label>
          <input
            type="checkbox"
            checked={darkMode}
            onChange={() => setDarkMode(!darkMode)}
          />
          Enable Dark Mode
        </label>
      </div>

      <div style={{ marginBottom: '15px' }}>
        <label>
          <input
            type="checkbox"
            checked={emailNotifications}
            onChange={() => setEmailNotifications(!emailNotifications)}
          />
          Email Notifications
        </label>
      </div>

      <button onClick={handleSave}>Save Settings</button>
    </div>
  );
};

export default Settings;
