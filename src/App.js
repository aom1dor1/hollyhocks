import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header bg-wed">
        <img
          //src="https://th.bing.com/th?id=OIP.m1dn7Ozxtio2ksWE-LM0FwHaH3&w=242&h=257&c=8&rs=1&qlt=90&o=6&dpr=1.4&pid=3.1&rm=2"
          className="App-logo"
          alt="logo"
        />
        <p className="text-wed-dark">Artem にようこそ</p>
        <a
          className="text-wed-dark underline"
          href="https://wed.company/"
          target="_blank"
          rel="noopener noreferrer"
        >
          教科書を出品する
        </a>
        <a
          className="text-wed-dark underline"
          href="https://wed.company/"
          target="_blank"
          rel="noopener noreferrer"
        >
          教科書を購入する
        </a>
      </header>
    </div>
  );
}

export default App;
