import React from "react";

import { FormButton } from "../components/ui/buttons/FormButton";
import { Input } from "../components/ui/Input";
import { submitToHs } from "./submitToHs_no_booking";
import { CtaButton } from '../components/ui/buttons/CtaButton';

interface PopupFormProps {
  children?: React.ReactNode;
}

const PopupForm = ({ children }: PopupFormProps) => {
  const [formShow, setFormOpen] = React.useState(false);

  return (
    <div className="inline-block mt-4 relative w-fit">
      <CtaButton
        onClick={() => {
          setFormOpen(!formShow);
        }}
        
        hasArrow={true}
      >
        {children ?? "Get 2 free months SEO"}
      </CtaButton>

      {formShow && (
        <>
          <div
            className="fixed w-screen h-screen top-0 left-0"
            onClick={() => {
              setFormOpen(false);
            }}
          />
          <form
            id="popup-form"
            className="absolute mt-4 bg-white p-4 rounded-lg w-full min-w-[300px] md:min-w-[400px] shadow-2xl z-50"
            onSubmit={async (e) => {
              e.preventDefault();

              document
                .querySelectorAll("button.popup-form-button")
                .forEach((button) => {
                  button.setAttribute("disabled", "true");
                  button.innerHTML = "Submitting...";
                });
              
              // @ts-ignore
              await submitToHs(
                new FormData(
                  document.querySelector<HTMLFormElement>("#popup-form")!
                )
              );

              document
                .querySelectorAll("button.popup-form-button")
                .forEach((button) => {
                  button.removeAttribute("disabled");
                  button.innerHTML = "Submit";
                });
            }}
          >
            <div className="grid gap-3">
              <span className="text-black text-2xl font-semibold text-center">
                Enter your details.
              </span>
              <Input
                placeholder="First Name*"
                name="firstName"
                required
                className="lg:w-full border border-gray-light border-solid"
              />
              <Input
                placeholder="Phone*"
                name="phone"
                required
                className="lg:w-full border border-gray-light border-solid"
                type="tel"
              />
              <Input
                placeholder="Email*"
                name="email"
                required
                className="lg:w-full border border-gray-light border-solid"
                type="email"
              />
              <Input
                placeholder="Website"
                name="website"
                className="lg:w-full border border-gray-light border-solid"
                type="website"
              />
              <CtaButton>
                 Submit
              </CtaButton>
            </div>
          </form>
        </>
      )}
    </div>
  );
};

export { PopupForm };
