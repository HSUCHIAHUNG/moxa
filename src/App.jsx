import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage'
import Page1 from './pages/Page1'
import Dynamic from './pages/Dynamic'
import ErrorPage from './pages/Error'
import RootLayout from './layout/Root'
import { FETCH_AUTH } from './service';


const router = createBrowserRouter([
  { 
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path:'', element: <HomePage />},
      { path:'page1', element: <Page1 /> },
      { path:'page1/:id', element: <Dynamic /> },
    ]
  },
])

const value = {
  account: 'system',
  password: '123456',
}

const onSubmit = async (e) => {
  e.preventDefault();
  const {
    data, error, success,
  } = await FETCH_AUTH.Login(value);

  if (error) return;

  if (success) {
    const { accessToken } = data;
    console.log(accessToken)
  }
};

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <RouterProvider router={router}/>
      <form onSubmit={onSubmit}>
        <button>送出</button>
      </form>
    </>
  )
}

export default App
