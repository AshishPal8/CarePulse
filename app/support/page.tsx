import { Phone, Calendar, Clock, HelpCircle } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function SupportPage() {
  return (
    <div className="min-h-screen">
      <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="header mb-4 text-4xl font-extrabold">
            Need Help Booking Your Appointment?
          </h2>
          <p className="text-dark-700">
            We're here to assist you every step of the way.
          </p>
        </div>

        <Card className="mb-8 bg-blue-700">
          <CardHeader>
            <CardTitle className="flex items-center justify-center text-2xl">
              <Phone className="mr-2 size-6 text-blue-500" />
              Call Us for Assistance
            </CardTitle>
            <CardDescription className="text-center">
              Our support team is ready to help you book your appointment
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <a
              href="tel:1234567890"
              className="text-4xl font-bold transition-colors hover:text-blue-800"
            >
              +91 81301 66956
            </a>
          </CardContent>
        </Card>

        <div className="grid gap-6 md:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Calendar className="mr-2 size-5 text-blue-500" />
                Available 24/7
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Our booking assistance is available round the clock for your
                convenience.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Clock className="mr-2 size-5 text-blue-500" />
                Quick & Easy
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                We'll help you book your appointment in just a few minutes over
                the phone.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <HelpCircle className="mr-2 size-5 text-blue-500" />
                Any Questions?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Our team can answer any questions you have about our services or
                the booking process.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <p className="mb-4 text-xl text-dark-700">Prefer to book online?</p>
          <Link href="/">
            <Button size="lg" className="shad-primary-btn">
              Book Appointment Online
            </Button>
          </Link>
        </div>
      </main>
    </div>
  );
}
