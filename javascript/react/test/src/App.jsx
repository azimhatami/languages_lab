import WelcomePage from './components/WelcomePage';
import WelcomeMessage from './components/WelcomeMessage';

function App() {
  const userName = 'Azim';

  return (
    <>
      <WelcomePage>
        <WelcomeMessage userName={userName} />
      </WelcomePage>
    </>
  )
}

export default App
