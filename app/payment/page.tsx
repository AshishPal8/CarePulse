import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function PaymentPage() {
  return (
    <div className="min-h-screen bg-gray-50 px-4 py-8">
      <div className="mx-auto max-w-4xl rounded-lg bg-white shadow">
        <div className="p-6">
          {/* Header */}
          <div className="mb-8 flex items-center gap-4">
            <div className="flex size-12 items-center justify-center rounded-lg bg-blue-500">
              <span className="text-2xl text-white">✋</span>
            </div>
            <h1 className="text-2xl font-bold text-gray-900">RazorPay</h1>
          </div>

          <div className="grid items-start gap-12 md:grid-cols-2">
            {/* Left Column - Registration Details */}
            <div>
              <h2 className="mb-6 text-2xl font-bold text-gray-900">
                Registrations
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="mb-4 text-xl font-bold text-gray-900">
                    Register for Doctime
                  </h3>
                </div>
                <div>
                  <h4 className="mb-2 text-lg font-bold text-gray-900">
                    Date and Time
                  </h4>
                  <p className="text-gray-600">29 Nov 2024</p>
                </div>
              </div>
            </div>

            {/* Right Column - Payment Details */}
            <div>
              <h2 className="mb-6 text-2xl font-bold text-gray-900">
                Payment Details
              </h2>
              <form className="space-y-4">
                <div>
                  <label className="mb-1  block text-sm font-medium">
                    Amount
                  </label>
                  <Input type="text" placeholder="700" readOnly />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium">
                    Email
                  </label>
                  <Input type="email" placeholder="ashish@gmail.com" />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium">
                    Phone
                  </label>
                  <Input type="tel" placeholder="enter phone number" />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium">
                    Full Name
                  </label>
                  <Input type="text" placeholder="enter you name" />
                </div>
              </form>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-8 border-t pt-6">
            <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
              <div className="text-sm text-gray-500">
                Want to create payment pages for your business? Visit{" "}
                <a href="#" className="text-blue-500 hover:underline">
                  Razorpay Payment Pages
                </a>{" "}
                and get started!
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <Image
                    src="/assets/images/visa.png"
                    alt="UPI"
                    width={40}
                    height={24}
                  />
                  <Image
                    src="/assets/images/rupay.png"
                    alt="Visa"
                    width={40}
                    height={24}
                  />
                  <Image
                    src="/assets/images/master.png"
                    alt="Mastercard"
                    width={40}
                    height={24}
                  />
                </div>
                <Button className="bg-yellow-400 text-gray-900 hover:bg-yellow-500">
                  Pay ₹700.00
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
