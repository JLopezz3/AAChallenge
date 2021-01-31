import React, { useState } from "react";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import FirstStep from "./TicketSearch1";
import SecondStep from "./TicketSearch2";
import ReviewSubmission from "./TicketSearch3";
import Success from "./TicketSearch4";
import validation from "./validation";

export default function ReportBug() {
  // Step titles
  const labels = ["Passenger Info", "Payment Info", "Review Booking"];

  const initialValues = {
    cus_email: "",
    cus_password: "",
    customer_firstname: "",
    customer_lastname: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    full_name: "",
    card_number: "",
    exp_month: "",
    exp_year: "",
  };

  const fieldsValidation = {
    cus_email: {
      error: "",
      validate: "contact_email",
      maxLength: 50,
    },
    customer_firstname: {
      error: "",
      validate: "text",
      minLength: 2,
      maxLength: 25,
    },
    customer_lastname: {
      error: "",
      validate: "text",
      minLength: 2,
      maxLength: 25,
    },
    city: {
      error: "",
      validate: "text",
      maxLength: 25,
    },
    street: {
      error: "",
      validate: "text",
      maxLength: 40,
    },
    state: {
      error: "",
      validate: "text",
      maxLength: 2,
    },
    zipcode: {
      error: "",
      validate: "",
      maxLength: 5,
    },
    full_name: {
      error: "",
      validate: "text",
      maxLength: 20,
    },
    card_number: {
      error: "",
      validate: "",
      maxLength: 16,
    },
    exp_month: {
      error: "",
      validate: "",
      maxLength: 2,
    },
    exp_year: {
      error: "",
      validate: "",
      maxLength: 2,
    },
  };

  const [activeStep, setActiveStep] = useState(0);
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});

  // Proceed to next step
  const handleNext = () => setActiveStep((prev) => prev + 1);
  // Go back to prev step
  const handleBack = () => setActiveStep((prev) => prev - 1);

  // Handle form change
  const handleChange = (e) => {
    const { name, value } = e.target;

    // Set values
    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));

    // set errors
    const error = validation(name, value, fieldsValidation) || "";

    setFormErrors({
      [name]: error,
    });
  };

  const handleSteps = (step) => {
    switch (step) {
      case 0:
        return (
          <FirstStep
            handleNext={handleNext}
            handleChange={handleChange}
            values={formValues}
            formErrors={formErrors}
          />
        );
      case 1:
        return (
          <SecondStep
            handleNext={handleNext}
            handleBack={handleBack}
            handleChange={handleChange}
            values={formValues}
            formErrors={formErrors}
          />
        );
      case 2:
        return (
          <ReviewSubmission
            handleNext={handleNext}
            handleBack={handleBack}
            values={formValues}
          />
        );
      default:
        break;
    }
  };

  return (
    <>
      {activeStep === labels.length ? (
        // Last Component
        <Success values={formValues} />
      ) : (
        <>
          <Stepper
            activeStep={activeStep}
            style={{ margin: "30px 0 15px" }}
            alternativeLabel
          >
            {labels.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {handleSteps(activeStep)}
        </>
      )}
    </>
  );
}
