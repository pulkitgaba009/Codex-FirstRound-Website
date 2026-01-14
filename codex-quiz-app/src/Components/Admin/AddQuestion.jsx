import { useState } from "react";
import QuestionForm from "./QuestionForm";
import QuestionView from "./QuestionView";
import { RateLimiting } from "../../Helper";
import axios from "axios";
import toast from "react-hot-toast";

function AddQuestion() {
  const [formData, setFormData] = useState({
    question: "What is the output of the following C code?",
    optionA: "45",
    optionB: "55",
    optionC: "65",
    optionD: "75",
    answer: "55",
    language: "C",
    code: `#include <stdio.h>

int main() {
    int sum = 0;
    for (int i = 1; i <= 10; i++) {
        sum += i;
    }
    printf("%d", sum);
    return 0;
}`,
  });

  const [loading, setLoading] = useState(false);
  const [rateLimited, setRateLimited] = useState(false);

  const postQuestion = async () => {
    try {
      setLoading(true);
      axios.post("http://localhost:3000/api/questions", {
        question:formData.question,
        optionA:formData.optionA,
        optionB:formData.optionB,
        optionC:formData.optionC,
        optionD:formData.optionD,
        answer:formData.answer,
        language:formData.language,
        code:formData.code,
      });
      toast.success("Added question in DB Successfully !!! ");
    } catch (error) {
      if (error.response?.status === 429) {
        setRateLimited(true);
      } else {
        toast.error("Failed to load setting");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  if (rateLimited) return <RateLimiting />;

  return (
    <div className="box">
      <div className="subDivs w-[60%] mt-4">
        <QuestionView formData={formData} />
      </div>

      <div className="subDivs w-[40%] mt-4">
        <h1 className="authHeading">Enter the Question</h1>
        <hr className="horizontalLine mt-2" />

        <div className="w-full mt-4 h-[87%] overflow-auto scrollbar-hidden px-8">
          <QuestionForm
            formData={formData}
            onChange={handleChange}
            onSubmit={postQuestion}
            mode="post"
            isLoading={loading}
          />
        </div>
      </div>
    </div>
  );
}

export default AddQuestion;
