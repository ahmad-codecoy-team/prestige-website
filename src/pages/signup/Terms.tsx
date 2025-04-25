import React, { useEffect, useRef, useState } from "react";
import SignatureCanvas from "react-signature-canvas";

function Terms() {
  const [isChecked, setIsChecked] = useState(false);

  const [isMobile, setIsMobile] = useState(false);

  const sigCanvas: any = useRef(null);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    checkScreenSize();

    // Add event listener for window resize
    window.addEventListener("resize", checkScreenSize);

    // Clean up
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const clearSignature = () => {
    sigCanvas.current.clear();
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <div className="text-sm text-gray-700 leading-relaxed mb-6 text-justify">
        <p className="mb-4">
          Lorem ipsum dolor sit amet consectetur. Est varius elit purus nulla in
          lectus pharetra sodales suspendisse. Diam quisque nisl quis elit urna.
          In sed cursus proin eu sollicitudin nisl. Nec posuere orci leo lacus
          cum elit ut mattis amet. Consectetur elit viverra mollis massa.
          Sollicitudin ullamcorper pretique dictum massa ullamcorper et sed
          eget. Massa proin consectetur magna habitant tempus faucibus.
        </p>
        <p className="mb-4">
          Amet id gravida risus posuere. Odio volutpat gravida fames ut ornare
          sit etiam negetitis interdum. Lectus pharetra pulvinar pellentesque
          sit aliquiet amet sagittis semper eget. Tempus quis adipiscing turpis
          blandit facilisis semper lectus ut potenti. Adipiscing malesuada
          fermentum et nisi nisl odio. Cursus non in maecenas ut vulputate cum.
          Sint scelerisque tempus dolor posuere interdum ipsum amet.
        </p>
        <p className="mb-4">
          Vulputate odio pellentesque ut posuere. Justo semper nibh auctor
          quisque elit eleifend a fringilla. Quis et et nam varius faucibus amet
          iaculis rutrum. Nunc eget fermentum diam nulla curabitur. A amet et
          arcu diam in. Eget amet ac urna mauris ullamcorper phaselius.
        </p>
        <p className="mb-4">
          Eget orci sit in nunc consequat egestas amet tortor. Sit vestibulum
          libero at gravida mauris volutpat purus eaesmod. Nam ut facilisis amet
          tellus accumsan sed eget fames. Elementum gravida nec viverra velit
          nunc aenean. Id enim purus potenti tincidunt sed accumsan. Ridiculus
          nunc habitasse arcu id dui. Integer egestas morbi vitae urna facilisis
          felis est nunc. Rhoncus sed vitae egestas ornare.
        </p>
        <p className="mb-4">
          Varius ornare aliquet eleifend vel congue risus eget. Scelerisque
          risus viverra velit et pharetra tellus elit augue. Ac nibh fermentum
          sem vel. In pellentesque at eu sed. Augue felis ut arcu sed etiam sit
          tincidunt. Elementum porta nisl a molestia blandit tortor.
        </p>
        <p className="mb-4">
          Vitae eget id aliquet sit urna aliquam magna. Nec blandit enim
          phasellus amet duis in. Convallis ligula eget habitant bibendum
          ultricies risus. Quisque eleifend ut mainus risus dolor. Arcu nam
          sapien consectetur adipiscing turpis faucibus purus tempus. Fermentum
          odio in quis turpis elementum praesent tristique habitant aliquet
          dolor condmentum dictumst.
        </p>
      </div>

      <div className="flex items-center mb-6">
        <input
          id="accept-terms"
          type="checkbox"
          className="w-4 h-4 border-gray-300 rounded"
          checked={isChecked}
          onChange={() => setIsChecked(!isChecked)}
        />
        <label htmlFor="accept-terms" className="ml-2 text-sm text-gray-700">
          I agree to all terms and condition
        </label>
      </div>

      <div className="mb-6 flex flex-col items-center">
        <SignatureCanvas
          ref={sigCanvas}
          canvasProps={{
            width: isMobile ? 300 : 600, // Make it responsive based on parent container
            height: 200,
            style: {
              border: "0.5px solid gray", // Border style
              borderRadius: "5px", // Optional rounded corners
            },
          }}
        />

        {/* <div className="border border-gray-300 rounded-md w-full h-32 bg-gray-50"></div> */}
        <p className="text-xs text-gray-500 mt-1">Signature</p>
      </div>

      <button
        onClick={clearSignature}
        type="button"
        className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
      >
        Clear
      </button>
    </div>
  );
}

export default Terms;
