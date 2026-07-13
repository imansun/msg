// Import Dependencies
import React, { useState } from "react";
import clsx from "clsx";

// Local Imports
import { Page } from "@/components/shared/Page";
import { Card } from "@/components/ui";
import { KYCFormProvider } from "./KYCFormProvider.tsx";
import { Stepper } from "./Stepper.tsx";
import { UnderReview } from "./UnderReview";
import { AddressInfo } from "./steps/AddressInfo.tsx";
import { Declaration } from "./steps/Declaration.tsx";
import { Idenfication } from "./steps/Idenfication.tsx";
import { PersonalInfo } from "./steps/PersonalInfo.tsx";
import { FormState } from "./KYCFormContext.ts";
// ----------------------------------------------------------------------

export interface Step {
  key: keyof FormState["formData"];
  component: React.ComponentType<any>;
  label: string;
  description: string;
}

const steps: Step[] = [
  {
    key: "personalInfo",
    component: PersonalInfo,
    label: "اطلاعات شخصی",
    description:
      "لطفاً اطلاعات فردی خود را برای تکمیل احراز هویت وارد کنید.",
  },
  {
    key: "addressInfo",
    component: AddressInfo,
    label: "اطلاعات آدرس",
    description: "نام، تاریخ تولد، جنسیت، ایمیل، تلفن و شغل را وارد کنید.",
  },
  {
    key: "identifyDocument",
    component: Idenfication,
    label: "مدرک شناسایی",
    description:
      "یک نسخه اسکن شده از مدرک شناسایی (گذرنامه، گواهینامه رانندگی یا کارت شناسایی) بارگذاری کنید.",
  },
  {
    key: "declaration",
    component: Declaration,
    label: "تأیید و تعهد",
    description:
      "شرایط و ضوابط فرم را مطالعه و با آنها موافقت نمایید. تیک تأیید اطلاعات و رضایت را بزنید.",
  },
];

const KYCForm = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [finished, setFinished] = useState(false);

  const ActiveForm = steps[currentStep].component;

  const stepsNode = (
    <>
      <div className="col-span-12 sm:order-last sm:col-span-4 lg:col-span-3">
        <div className="sticky top-24 sm:mt-3">
          <Stepper
            steps={steps}
            currentStep={currentStep}
            setCurrentStep={setCurrentStep}
          />
        </div>
      </div>
      <div className="col-span-12 sm:col-span-8 lg:col-span-9">
        <Card className="h-full p-4 sm:p-5">
          <h5 className="dark:text-dark-100 text-lg font-medium text-gray-800">
            {steps[currentStep].label}
          </h5>
          <p className="dark:text-dark-200 text-sm text-gray-500">
            {steps[currentStep].description}
          </p>
          {!finished && (
            <ActiveForm
              setCurrentStep={setCurrentStep}
              setFinished={setFinished}
            />
          )}
        </Card>
      </div>
    </>
  );

  return (
    <Page title="eKYC Form">
      <div className="transition-content grid w-full grid-rows-[auto_1fr] px-(--margin-x) pb-8">
        <h2 className="dark:text-dark-50 py-5 text-xl font-medium tracking-wide text-gray-800 lg:py-6 lg:text-2xl">
          فرم احراز هویت (eKYC)
        </h2>

        <KYCFormProvider>
          <div
            className={clsx(
              "grid grid-cols-12 gap-4 sm:gap-5 lg:gap-6",
              !finished && "grid-rows-[auto_1fr] sm:grid-rows-none",
            )}
          >
            {finished ? (
              <div className="col-span-12 place-self-center">
                <UnderReview />
              </div>
            ) : (
              stepsNode
            )}
          </div>
        </KYCFormProvider>
      </div>
    </Page>
  );
};

export default KYCForm;
