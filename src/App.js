import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a href='https://nightbot.tv/oauth2/authorize?response_type=token&client_id=696715cfbb1376ccd8702f40a5191877&scope=commands%20timers&redirect_uri=https%3A%2F%2Frolaca11.github.io%2Fnightbot-oauth2-app%2F' className='button'>Login</a>
        <p>
          Token: <code>{ getToken() ?? "Log in to get token" }</code>
        </p>
      </header>
    </div>
  );
}

const getToken = () => {
  return window.location.hash.substring(1)
  .split("&").map(entry => ({
    key: entry.split("=")[0],
    value: entry.split("=")[1]
  })).find(entry => entry.key === "access_token")?.value
}

export default App;
