import { useRef, useState } from "react";
import SignaturePad from "react-signature-canvas";

interface SignatureCanvasProps {
  onSignatureChange: (isEmpty: boolean) => void;
}

export const SignatureCanvas = ({ onSignatureChange }: SignatureCanvasProps) => {
  const sigCanvas = useRef<SignaturePad>(null);
  const [hasDrawn, setHasDrawn] = useState(false);

  const handleClear = () => {
    sigCanvas.current?.clear();
    setHasDrawn(false);
    onSignatureChange(true);
  };

  const handleEnd = () => {
    // After user finishes drawing, check if there's content
    if (sigCanvas.current && !sigCanvas.current.isEmpty()) {
      setHasDrawn(true);
      onSignatureChange(false);
    }
  };

  const handleBegin = () => {
    // When user starts drawing
    if (!hasDrawn) {
      setHasDrawn(true);
      onSignatureChange(false);
    }
  };

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <h3 className="text-lg md:text-xl font-bold text-black">Signature</h3>
        <button
          type="button"
          onClick={handleClear}
          className="text-sm text-black font-medium hover:underline"
        >
          Clear
        </button>
      </div>

      <div className="bg-white rounded-2xl border-2 border-black/20 overflow-hidden">
        <SignaturePad
          ref={sigCanvas}
          canvasProps={{
            className: "w-full h-[180px] cursor-crosshair",
          }}
          backgroundColor="white"
          penColor="black"
          onBegin={handleBegin}
          onEnd={handleEnd}
        />
      </div>

      <p className="text-xs text-black/70">
        Please sign above using your mouse or touch screen
      </p>
    </div>
  );
};
