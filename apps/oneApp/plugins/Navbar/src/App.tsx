function App({ uid, name }: { uid: string; name: string }) {
  return (
    <nav>
      [ {name} - {uid} ]
    </nav>
  );
}

export default App;
