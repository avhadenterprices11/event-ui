import { motion } from 'motion/react';

interface StepProgressProps {
  currentStep: number;
}

const steps = [
  { number: 1, label: 'Event Type' },
  { number: 2, label: 'Date & Location' },
  { number: 3, label: 'Budget' },
  { number: 4, label: 'Event Details' },
  { number: 5, label: 'Review & Submit' },
];

export function StepProgress({ currentStep }: StepProgressProps) {
  return (
    <div className="mb-12">
      <div className="flex items-center justify-between">
        {steps.map((step, index) => (
          <div key={step.number} className="flex items-center flex-1">
            {/* Step Circle */}
            <div className="flex flex-col items-center">
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ 
                  scale: currentStep >= step.number ? 1 : 0.9,
                  backgroundColor: currentStep >= step.number ? '#C6A75E' : 'transparent',
                }}
                transition={{ duration: 0.3 }}
                className={`w-14 h-14 rounded-full flex items-center justify-center border-2 transition-all ${
                  currentStep >= step.number
                    ? 'border-[#C6A75E] text-[#0B0B0D]'
                    : 'border-[#C6A75E]/40 text-[#C6A75E]/60'
                }`}
              >
                <span className="text-lg font-medium">
                  {step.number.toString().padStart(2, '0')}
                </span>
              </motion.div>
              <p className={`mt-3 text-xs text-center whitespace-nowrap transition-colors ${
                currentStep >= step.number ? 'text-[#C6A75E]' : 'text-gray-500'
              }`}>
                {step.label}
              </p>
            </div>

            {/* Connector Line */}
            {index < steps.length - 1 && (
              <div className="flex-1 h-px mx-4 relative top-[-20px]">
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ 
                    scaleX: currentStep > step.number ? 1 : 0,
                  }}
                  transition={{ duration: 0.5 }}
                  className="h-full bg-[#C6A75E] origin-left"
                />
                <div className="absolute inset-0 bg-[#C6A75E]/20" />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
