
import AnnualPayment from "./AnnualPayment";
import InvoicePayment from "./InvoicePayment";
import React from "react";

const PaymentTabs = ({ category }) => {

  const [openTab, setOpenTab] = React.useState(1);
  
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full">
          <ul
            className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row border-0"
            role="tablist"
          >
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-semibold px-5 py-3 shadow-lg rounded-lg block leading-normal" +
                  (openTab === 1
                    ? "text-white bg-teal-600"
                    : "text-teal-600 bg-white")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                Annual
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-semibold px-5 py-3 shadow-lg rounded-lg block leading-normal" +
                  (openTab === 2
                    ? "text-white bg-teal-600"
                    : "text-teal-600 bg-white")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                 Invoice
              </a>
            </li>
          </ul>
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
            <div className="px-4 py-5 flex-auto">
              <div className="tab-content tab-space">
                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                  <AnnualPayment category={ category }></AnnualPayment>
                </div>
                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                  <InvoicePayment category={ category }></InvoicePayment>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentTabs