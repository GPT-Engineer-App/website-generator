import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const Index = () => {
  const [inputValue, setInputValue] = useState("");
  const [submittedValue, setSubmittedValue] = useState("");

  const handleSubmit = () => {
    setSubmittedValue(inputValue);
  };

  return (
    <div className="h-screen w-screen flex items-center justify-center bg-gray-100">
      <Card className="w-96">
        <CardHeader>
          <CardTitle>Simple Form</CardTitle>
        </CardHeader>
        <CardContent>
          <Input type="text" placeholder="Enter something..." value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
        </CardContent>
        <CardFooter className="flex justify-end">
          <Button onClick={handleSubmit}>Submit</Button>
        </CardFooter>
      </Card>
      {submittedValue && (
        <div className="mt-4 text-center">
          <p className="text-lg">You submitted: {submittedValue}</p>
        </div>
      )}
    </div>
  );
};

export default Index;
