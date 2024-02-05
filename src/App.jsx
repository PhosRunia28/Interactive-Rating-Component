import { useState } from "react";
import Complete from "./components/Complete";
import Rating from "./components/Rating";
function App() {
  const [selectedRating, setSelectedRating] = useState(null);
  const [isCompleted, setIsCompleted] = useState(false);
  return (
    <main className="overflow-hidden">
      {!isCompleted && (
        <Rating
          setIsCompleted={setIsCompleted}
          isCompleted={isCompleted}
          selectedRating={selectedRating}
          setSelectedRating={setSelectedRating}
        />
      )}
      {isCompleted && <Complete selectedRating={selectedRating} />}
    </main>
  );
}

export default App;
