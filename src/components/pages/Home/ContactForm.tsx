import { useState, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import {
  CaretDown,CaretRightIcon
} from "@phosphor-icons/react";

import contactImg from "../../../assets/contactImg.png";

import {
  contactentries,
  type ContactFormData,
} from "../../../Api/Api";

const ContactForm = () => {
  const [submitting, setSubmitting] =
    useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
    setValue,
 } = useForm<ContactFormData>({
  mode: "onChange",
  defaultValues: {
    phone: "",
    support_needed: [],
  },
});

  const onSubmitForm = async (
    data: ContactFormData
  ) => {
    try {
      setSubmitting(true);

      console.log(
        "Sending Data:",
        data
      );

      const res =
        await contactentries(data);

      console.log(
        "API Response:",
        res
      );

      if (
        res?.success ||
        res?.status === 200
      ) {
        alert("✅ Submitted!");
        reset();
      } else {
        console.log(
          "Unexpected response:",
          res
        );

        alert(
          "❌ Submission failed"
        );
      }
    } catch (err) {
      console.error(
        "API ERROR:",
        err
      );

      alert(
        "❌ Error submitting form"
      );
    } finally {
      setSubmitting(false);
    }
  };

const [supportOpen, setSupportOpen] = useState(false);

const supportOptions = [
  "Bookkeeping",
  "QuickBooks cleanup",
  "Payroll support",
  "Tax preparedness",
  "Fractional CFO",
  "Family office support",
  "WealthCare Management",
];

const supportRef =
  useRef<HTMLDivElement | null>(null);

useEffect(() => {
  const handleClickOutside = (
    event: MouseEvent
  ) => {
    if (
      supportRef.current &&
      !supportRef.current.contains(
        event.target as Node
      )
    ) {
      setSupportOpen(false);
    }
  };

  document.addEventListener(
    "mousedown",
    handleClickOutside
  );

  return () => {
    document.removeEventListener(
      "mousedown",
      handleClickOutside
    );
  };
}, []);

  return (
    <section className="bg-[#F6F6F6] ">
      <div className="max-w-[1440px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 xl:gap-[30px] overflow-hidden">

        {/* LEFT SIDE */}
        <div className="bg-[#F5F5F5] py-[50px] px-4 md:pl-8 lg:pl-12 xl:pl-[70px]">

          {/* HEADING */}
          <div className="mb-8">
            <div className="flex flex-col items-start gap-3 mb-2">
                  <div className="w-10 h-[2px] bg-[#FFAC00]" />
                  <p className="text-md md:text-xl xl:text-2xl text-[#FFAC00] italic font-highlight font-bold">
                    Contact Us
                  </p>
                </div>

            <h2 className="text-[#1A2B32] text-xl sm:text-3xl xl:text-[38px] font-bold leading-snug">
              Get In Touch With Our Team 
            </h2>
          </div>

          {/* FORM */}
          <form
            className="space-y-3 md:space-y-5"
            onSubmit={handleSubmit(
              onSubmitForm
            )}
          >

            {/* NAME */}
            <div className="flex flex-col gap-1">
              <input
                type="text"
                placeholder="Name*"
                {...register("name", {
                  required: "Name is required",
                  pattern: {
                    value:
                      /^[A-Za-z\s]+$/,
                    message: "Only letters are allowed",
                  },
                })}
                className="w-full bg-white border border-[#D9D9D9] rounded-full p-2.5 xl:p-5 text-xs md:text-base outline-none focus:border-[#1F6B5A]"
              />

              {errors.name && (
                <p className="text-xs ml-5 md:text-sm text-red-500 ">{errors.name.message}</p>
              )}
            </div>

            {/* BUSINESS */}
            <div className="relative">
              <input
                type="text"
                placeholder="Business / Family Office Name"
                {...register(
                  "business_family_office_name"
                )}
                className="w-full bg-white border border-[#D9D9D9] rounded-full p-2.5 xl:p-5 text-xs md:text-base outline-none focus:border-[#1F6B5A]"
              />
            </div>

            {/* EMAIL */}
            <div className="flex flex-col gap-1">
              <input
                type="email"
                placeholder="Email*"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value:
                      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|net|org|in)$/,
                    message: "Invalid email",
                  },
                })}
                className="w-full bg-white border border-[#D9D9D9] rounded-full p-2.5 xl:p-5 text-xs md:text-base outline-none focus:border-[#1F6B5A]"
              />

              {errors.email && (
                <p className="text-xs ml-5 md:text-sm text-red-500">{errors.email.message}</p>
              )}
            </div>

            {/* PHONE */}
            <div className="flex flex-col gap-1">
              <input
                type="tel"
                placeholder="Phone*"
                {...register("phone", {
                  required: "Phone number is required",
                  validate: {
                    validFormat: (value) => {
                      if (value === "") return true;

                      const plusCount =
                        (value.match(/\+/g) || []).length;

                      if (plusCount > 1) {
                        return "Only one '+' is allowed";
                      }

                      if (
                        value.includes("+") &&
                        !value.startsWith("+")
                      ) {
                        return "'+' must be at the beginning";
                      }

                      if (!/^[+]?[0-9]*$/.test(value)) {
                        return "Only digits and '+' allowed";
                      }

                      if (value.length > 16) {
                        return "Phone number too long";
                      }

                      return true;
                    },
                  },
                })}

                onChange={(e) => {
                  let value = e.target.value;

                  value = value.replace(/[^0-9+]/g, "");

                  if (value.startsWith("+")) {
                    value =
                      "+" +
                      value.slice(1).replace(/\+/g, "");
                  } else {
                    value = value.replace(/\+/g, "");
                  }

                  setValue("phone", value.slice(0, 15));
                }}

                onPaste={(
                  e: React.ClipboardEvent<HTMLInputElement>
                ) => {
                  e.preventDefault();

                  let paste =
                    e.clipboardData.getData("text");

                  paste = paste.replace(
                    /[^0-9+]/g,
                    ""
                  );

                  if (paste.startsWith("+")) {
                    paste =
                      "+" +
                      paste.slice(1).replace(/\+/g, "");
                  } else {
                    paste = paste.replace(/\+/g, "");
                  }

                  setValue("phone", paste.slice(0, 15));
                }}

                className="w-full bg-white border border-[#D9D9D9] rounded-full p-2.5 xl:p-5 text-xs md:text-base outline-none focus:border-[#1F6B5A]"
              />

              {errors.phone && (
                <p className="text-xs ml-5 md:text-sm text-red-500">{errors.phone.message}</p>
              )}
            </div>

            <div className="relative">
              <input
                type="text"
                placeholder="Are you a business owner or family office?
"
                {...register(
                  "business_owner_or_family_office"
                )}
                className="w-full bg-white border border-[#D9D9D9] rounded-full p-2.5 xl:p-5 text-xs md:text-base outline-none focus:border-[#1F6B5A]"
              />
            </div>
            {/* SUPPORT */}
<div className="relative" ref={supportRef}>
  
  <div
    onClick={() =>
      setSupportOpen(!supportOpen)
    }
    className="w-full bg-white border border-[#D9D9D9] rounded-full p-2.5 xl:p-5 text-xs md:text-base outline-none cursor-pointer flex items-center justify-between"
  >
    <span
  className={`${
    watch("support_needed")?.length
      ? "text-gray-700"
      : "text-gray-400"
  }`}
>
  {watch("support_needed")?.length
    ? watch("support_needed").join(", ")
    : "What Support Are You Looking For?"}
</span>
    <CaretDown
      size={18}
      className={`transition-transform duration-300 ${
        supportOpen
          ? "rotate-180"
          : ""
      }`}
    />
  </div>

  {supportOpen && (
    <div className="absolute z-20 mt-2 left-5 w-[60%] bg-white border border-[#D9D9D9] rounded-lg shadow-lg p-4 flex flex-col gap-3">
      
      {supportOptions.map(
        (option) => (
          <label
            key={option}
            className="flex items-center gap-3 cursor-pointer text-sm"
          >
            <input
              type="checkbox"
              value={option}
              {...register(
                "support_needed"
              )}
              className="w-4 h-4 accent-[#2B9896]"
            />

            {option}
          </label>
        )
      )}
    </div>
  )}
</div>

            {/* BOOKS */}
            <div className="relative">
              <select
                {...register(
                  "books_current"
                )}
                className={`w-full appearance-none bg-white border border-[#D9D9D9] rounded-full p-2.5 xl:p-5 text-xs md:text-base outline-none focus:border-[#1F6B5A]
                  ${
      watch("books_current")
        ? "text-gray-700"
        : "text-gray-400"
    }
    `}
                
              >
                <option value="">
                  Are Your Books Current?
                </option>

                <option value="yes">
                  Yes
                </option>

                <option value="no">
                  No
                </option>

                <option value="partially">
                  Partially
                </option>
              </select>

              <CaretDown
                size={18}
                className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none"
              />
            </div>

            {/* ACCOUNTING SYSTEM */}
            <div>
              <input
                type="text"
                placeholder="What Accounting System Do You Use?"
                {...register(
                  "accounting_system"
                )}
                className="w-full bg-white border border-[#D9D9D9] rounded-full p-2.5 xl:p-5 text-xs md:text-base outline-none focus:border-[#1F6B5A]"
              />
            </div>

            {/* MESSAGE */}
            <div>
              <textarea
                rows={5}
                placeholder="Tell Us Something....."
                {...register(
                  "message"
                )}
                className="w-full resize-none bg-white border border-[#D9D9D9] rounded-xl lg:rounded-[25px] p-2.5 xl:p-5 text-xs md:text-base outline-none focus:border-[#1F6B5A]"
              ></textarea>
            </div>

            {/* BUTTON */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={
                  submitting
                }
                className={`group/btn bg-[#2B9896]  text-white rounded-full  pl-5 pr-3 py-2 lg:pl-8 lg:pr-3 lg:py-2.5 flex items-center gap-3 font-semibold
                  
                  ${submitting
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:bg-transparent  hover:shadow-[0px_0px_10px_1px_#00000026]  duration-300"
                  }
                `}
              >
                <span className="text-white text-xs sm:text-sm lg:text-base font-semibold group-hover/btn:text-[#2B9896] transition-colors duration-300">
                  {submitting
                    ? "Connecting..."
                    : "Contact Now"}
                </span>
                <div className="w-6 h-6 lg:w-8 lg:h-8 rounded-full bg-white text-[#2B9896] flex items-center justify-center shrink-0 group-hover/btn:bg-[#2B9896] group-hover/btn:text-white group-hover/btn:translate-x-1 transition-transform duration-300">
                                    <CaretRightIcon size={14} weight="bold" />
                                </div>
              </button>
            </div>
          </form>
        </div>

        {/* RIGHT SIDE */}
        <div className="h-[400px] md:h-full">
          <img
            src={contactImg}
            alt="Contact"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      </div>
    </section>
  );
};

export default ContactForm;