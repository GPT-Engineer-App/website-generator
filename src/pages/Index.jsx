import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {}
      <section className="flex flex-col items-center justify-center h-screen bg-blue-600 text-white">
        <h1 className="text-5xl font-bold mb-4">Welcome to Our Startup</h1>
        <p className="text-xl mb-8">Innovating the future, one step at a time.</p>
        <Button variant="outline" className="text-white border-white">
          Get Started
        </Button>
      </section>

      <section className="py-20 bg-white text-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>What is your startup about?</AccordionTrigger>
              <AccordionContent>Our startup focuses on innovating the future with cutting-edge technology solutions.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>How can I get started?</AccordionTrigger>
              <AccordionContent>You can get started by signing up on our platform and exploring our features.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>What are the benefits of using your services?</AccordionTrigger>
              <AccordionContent>Our services offer unparalleled efficiency and ease of use, helping you achieve your goals faster.</AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <section className="py-20 bg-white text-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Feature One</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Our first feature is amazing and will change the way you do things.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Feature Two</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Our second feature is even better and will revolutionize your workflow.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Feature Three</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Our third feature is the best and will make your life easier.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {}
      <section className="py-20 bg-white text-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>What is your startup about?</AccordionTrigger>
              <AccordionContent>Our startup focuses on innovating the future with cutting-edge technology solutions.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>How can I get started?</AccordionTrigger>
              <AccordionContent>You can get started by signing up on our platform and exploring our features.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>What are the benefits of using your services?</AccordionTrigger>
              <AccordionContent>Our services offer unparalleled efficiency and ease of use, helping you achieve your goals faster.</AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <section className="py-20 bg-gray-100 text-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader className="flex items-center space-x-4">
                <Avatar>
                  <AvatarImage src="https://via.placeholder.com/150" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle>John Doe</CardTitle>
                  <Badge variant="outline">CEO, Company</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p>This startup has changed my life. Their features are incredible!</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex items-center space-x-4">
                <Avatar>
                  <AvatarImage src="https://via.placeholder.com/150" />
                  <AvatarFallback>JS</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle>Jane Smith</CardTitle>
                  <Badge variant="outline">CTO, Another Company</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p>I can't imagine working without their tools. Absolutely fantastic!</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex items-center space-x-4">
                <Avatar>
                  <AvatarImage src="https://via.placeholder.com/150" />
                  <AvatarFallback>AB</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle>Alex Brown</CardTitle>
                  <Badge variant="outline">Developer, Tech Corp</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p>The best startup I've ever worked with. Highly recommend their services!</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {}
      <section className="py-20 bg-blue-600 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
        <p className="text-xl mb-8">Join us today and start experiencing the future.</p>
        <Button variant="outline" className="text-white border-white">
          Sign Up Now
        </Button>
      </section>
    </div>
  );
};

export default Index;
