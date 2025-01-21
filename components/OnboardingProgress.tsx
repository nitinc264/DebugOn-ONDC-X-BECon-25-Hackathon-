import React from 'react';
import { CheckCircle2, Circle } from 'lucide-react';
import { OnboardingStep } from '../types';

interface Props {
  steps: OnboardingStep[];
  currentStep: number;
}

export function OnboardingProgress({ steps, currentStep }: Props) {
  return (
    <div className="flex flex-col gap-4 w-full">
      {steps.map((step) => (
        <div
          key={step.id}
          className={`flex items-center gap-3 p-2 rounded-lg transition-colors ${
            step.id === currentStep
              ? 'text-blue-600 bg-blue-50'
              : 'text-gray-500 hover:bg-gray-50'
          }`}
        >
          {step.isCompleted ? (
            <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
          ) : (
            <Circle className="w-5 h-5 flex-shrink-0" />
          )}
          <div className="flex flex-col">
            <span className="text-sm font-medium">{step.title}</span>
            <span className="text-xs text-gray-500 hidden sm:block">
              {step.description}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}