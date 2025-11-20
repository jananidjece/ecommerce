import React from "react";
import { FaMailBulk } from "react-icons/fa";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/Button";
// import { Mail, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const Contacts = () => {
  return (
    <div>
      <div className=" bg-gray-50 flex items-center justify-center p-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-3xl"
        >
          <Card className="shadow-xl rounded-2xl p-6">
            <CardContent className="space-y-6">
              <h1 className="text-3xl font-bold text-center">Contact Us</h1>
              <p className="text-center text-gray-600 max-w-md mx-auto">
                Feel free to reach out using the form below. We will get back to
                you as soon as possible!
              </p>

              <div className="grid md:grid-cols-2 gap-6 relative  ">
                <div className=" flex items-center flex-col justify-center  relative top-3   ">
                  <div className="flex items-center gap-3 absolute top-16  ">
                    {/* <Mail /> */}
                    <p>support@example.com</p>
                  </div>
                  <div className="flex items-center gap-3 absolute top-24">
                    {/* <Phone /> */}
                    <p>+1 234 567 890</p>
                  </div>
                  <div className="flex items-center gap-3 absolute top-32">
                    {/* <MapPin /> */}
                    <p>123 Main Street, City, Country</p>
                  </div>
                </div>

                <form className="space-y-4">
                  <div>
                    <label className="block text-gray-700 font-medium">
                      Name
                    </label>
                    <input
                      type="text"
                      className="w-full p-2 border rounded-xl"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full p-2 border rounded-xl"
                      placeholder="Your email"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium">
                      Message
                    </label>
                    <textarea
                      rows="4"
                      className="w-full p-2 border rounded-xl"
                      placeholder="Write your message..."
                    ></textarea>
                  </div>
                  <Button className="w-full rounded-xl p-2 text-lg font-semibold bg-red-500">
                    Send Message
                  </Button>
                </form>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default Contacts;
