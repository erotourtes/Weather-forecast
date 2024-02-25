import { useEffect } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import useTrips from "./db/useTrip";
import MainPage from "./pages/MainPage";

const queryClient = new QueryClient();

function App() {
  const trips = useTrips();

  useEffect(() => {
    trips.init().then(() => {
      trips.chnageTripOrder("asc");
    });
  }, []);

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <MainPage />
      </QueryClientProvider>
    </>
  );
}

export default App;
