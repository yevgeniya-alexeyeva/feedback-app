import { useState } from "react";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackData from "./data/feedbackData";
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from "./components/FeedbackForm";

 function App() {
     const [feedback, setFeedback] = useState(FeedbackData);

     const deleteFeedback = (id) => {
         console.log(id);
         setFeedback(feedback.filter((item) => (item.id !== id)))
     }
    return (<>
<Header text="Feedback UI"/>
    <div className="container">
        <FeedbackForm/>
    <FeedbackStats feedback={feedback} />
    <FeedbackList feedback={feedback} handleFeedback={deleteFeedback}/>
    </div></>)
}

export default App;