
import React from 'react';

export const Disclaimer: React.FC = () => {
  return (
    <div className="bg-amber-50/50 border border-amber-100 p-3 rounded-lg text-amber-800 text-[11px] leading-snug text-center mb-6 max-w-2xl mx-auto">
      <span className="font-semibold uppercase tracking-tighter mr-1">Notice:</span>
      SafeSpace AI is an experimental AI companion. It is not a licensed therapist, counselor, or medical professional. This tool is not intended to provide professional psychological or medical advice, diagnosis, or treatment. If you are in crisis, please contact emergency services or a crisis hotline immediately.
    </div>
  );
};
