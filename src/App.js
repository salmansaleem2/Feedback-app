import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import Header from "./components/Header";
import FeedbackItem from "./components/FeedbackItem";
import FeedbackData from "./Data/FeedbackData";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeebackForm from "./components/FeebackForm";
import About from "./Page/About";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AboutIconsLink from "./components/AboutIconsLink";
import { FeedbackProvider } from "./components/FeedbackContext/FeedbackContext";

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };
  const deleteFeedback = (id) => {
    if (window.confirm("Are You sure you want to delete?")) {
      setFeedback(feedback.filter((list) => list.id !== id));
    }
  };

  return (
    <FeedbackProvider>
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <>
                  <FeebackForm handleAdd={addFeedback} />
                  <FeedbackStats feedback={feedback} />
                  <FeedbackList
                    feedback={feedback}
                    handleDelete={deleteFeedback}
                  />
                </>
              }
            ></Route>
            <Route path="/about" element={<About />} />
            <Route path="/" element={<AboutIconsLink />} />
          </Routes>
        </div>
      </Router>
    </FeedbackProvider>
  );
}

export default App;

// const title = "Blog Post";
// const body = "This is my blog post";
// const comments = [
//   { id: 1, text: "comment one" },
//   { id: 2, text: "comment two" },
//   { id: 3, text: "comment three" },
// ];

// const loading = false;
// if (loading) {
//   return <h1>Loading...</h1>;
// }

// const showComments = false;

{
  /* <h1>{title.toUpperCase()}</h1> */
}
{
  /* <p>{body}</p> */
}
{
  /* {Math.random() * (5 + 5)} */
}
{
  /* 
      {showComments ? (
        <div className="comments">
          <h3>Comments ({comments.length})</h3>
          <ul>
            {comments.map((comment, index) => (
              <li key={index}> {comment.text}</li>
            ))}
          </ul>
        </div>
      ) : (
        "no"
      )} */
}
