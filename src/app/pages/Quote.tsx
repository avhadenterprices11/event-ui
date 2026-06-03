import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { QuoteHero } from '../components/QuoteHero';
import { StepProgress } from '../components/StepProgress';
import { Step1EventType } from '../components/Step1EventType';
import { Step2DateLocation } from '../components/Step2DateLocation';
import { Step3Budget } from '../components/Step3Budget';
import { Step4Details } from '../components/Step4Details';
import { Step5Review } from '../components/Step5Review';
import { SuccessState } from '../components/SuccessState';
import { ArrowRight, ArrowLeft } from 'lucide-react';

export default function Quote() {
  const [currentStep, setCurrentStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    eventType: '',
    eventDate: '',
    location: '',
    guestCount: '',
    budget: '',
    vision: '',
    needVenue: false,
    needCatering: false,
    fullDesign: false,
  });

  const handleNext = () => {
    if (currentStep < 5) {
      setCurrentStep(currentStep + 1);
      window.scrollTo({ top: 400, behavior: 'smooth' });
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      window.scrollTo({ top: 400, behavior: 'smooth' });
    }
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const updateFormData = (field: string, value: string | boolean) => {
    setFormData({ ...formData, [field]: value });
  };

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return formData.eventType !== '';
      case 2:
        return formData.eventDate !== '' && formData.location !== '' && formData.guestCount !== '';
      case 3:
        return formData.budget !== '';
      case 4:
        return formData.vision !== '';
      case 5:
        return true;
      default:
        return false;
    }
  };

  return (
    <div className="bg-[#0B0B0D] text-white min-h-screen">
      <QuoteHero />

      <section className="py-20 pb-32">
        <div className="max-w-[1440px] mx-auto px-24">
          {!submitted ? (
            <div className="bg-[#111114] border border-[#C6A75E]/30 rounded-2xl p-12 shadow-2xl">
              {/* Step Progress */}
              <StepProgress currentStep={currentStep} />

              {/* Step Content */}
              <div className="min-h-[500px]">
                <AnimatePresence mode="wait">
                  {currentStep === 1 && (
                    <Step1EventType
                      key="step1"
                      selectedType={formData.eventType}
                      onSelect={(type) => updateFormData('eventType', type)}
                    />
                  )}
                  {currentStep === 2 && (
                    <Step2DateLocation
                      key="step2"
                      formData={formData}
                      onChange={updateFormData}
                    />
                  )}
                  {currentStep === 3 && (
                    <Step3Budget
                      key="step3"
                      selectedBudget={formData.budget}
                      onSelect={(budget) => updateFormData('budget', budget)}
                    />
                  )}
                  {currentStep === 4 && (
                    <Step4Details
                      key="step4"
                      formData={formData}
                      onChange={updateFormData}
                    />
                  )}
                  {currentStep === 5 && (
                    <Step5Review
                      key="step5"
                      formData={formData}
                      onEdit={(step) => setCurrentStep(step)}
                    />
                  )}
                </AnimatePresence>
              </div>

              {/* Navigation Buttons */}
              <div className="flex items-center justify-between mt-12 pt-8 border-t border-[#C6A75E]/20">
                {/* Previous Button */}
                {currentStep > 1 && (
                  <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    onClick={handlePrevious}
                    className="flex items-center gap-2 px-6 py-3 border border-[#C6A75E]/40 rounded-lg text-[#C6A75E] hover:bg-[#C6A75E]/10 hover:border-[#C6A75E] transition-all"
                  >
                    <ArrowLeft className="w-5 h-5" />
                    <span>Previous</span>
                  </motion.button>
                )}

                {/* Spacer */}
                {currentStep === 1 && <div />}

                {/* Next/Submit Button */}
                {currentStep < 5 ? (
                  <motion.button
                    whileHover={{ scale: canProceed() ? 1.03 : 1 }}
                    onClick={handleNext}
                    disabled={!canProceed()}
                    className={`flex items-center gap-2 px-8 py-4 rounded-lg font-medium transition-all duration-300 ${
                      canProceed()
                        ? 'bg-gradient-to-r from-[#C6A75E] to-[#A88E50] text-[#0B0B0D] hover:shadow-lg hover:shadow-[#C6A75E]/30'
                        : 'bg-gray-700 text-gray-500 cursor-not-allowed'
                    }`}
                  >
                    <span>Continue</span>
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>
                ) : (
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleSubmit}
                    className="flex items-center gap-2 px-10 py-4 rounded-lg font-medium bg-gradient-to-r from-[#C6A75E] to-[#A88E50] text-[#0B0B0D] hover:shadow-2xl hover:shadow-[#C6A75E]/40 transition-all duration-300"
                  >
                    <span>Submit Request</span>
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>
                )}
              </div>
            </div>
          ) : (
            <div className="bg-[#111114] border border-[#C6A75E]/30 rounded-2xl p-12 shadow-2xl">
              <SuccessState />
            </div>
          )}
        </div>
      </section>
    </div>
  );
}