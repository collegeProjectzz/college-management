import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import useForm from "../../../src/hooks/useForm";

export default function EditMarks({ openModal, setOpenModal, data }) {

  console.log("data", data);

  const { formData, handleInputChange } = useForm({
    first: "",
    second: "",
    third: "",
    // total: "",
    // avg: ""
  });
  const { first, second, third } = formData;
  const {
    cId,
    cName,
    credit,
    dNo,
    email,
    it1,
    it2,
    it3,
    total,
    avg,
    name,
    password,
    phone,
    rollNo,
  } = data;
  const cancelButtonRef = useRef(null);

  const updateItMarks = async () => {
    await fetch("http://localhost/college-backend/api/exam/updateITmarks.php", {
      method: "PUT",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        rollNo,
        cId,
        it1: first,
        it2: second,
        it3: second,
        total: second,
        avg: second
      })
    })
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.log(err));
  };

  return (
    <Transition.Root show={openModal} as={Fragment}>
      <Dialog
        as="div"
        className="fixed z-10 inset-0 overflow-y-auto"
        initialFocus={cancelButtonRef}
        onClose={setOpenModal}
      >
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 backdrop-blur-sm bg-transparent bg-opacity-75 transition-opacity" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <Dialog.Title
                      as="h3"
                      className="text-lg leading-6 font-medium text-gray-900"
                    >
                      Student Details
                    </Dialog.Title>
                    <div className="mt-3">
                      <p className=" text-gray-500 text-base">
                        Name:{name}
                      </p>
                      <p className=" text-gray-500 mt-3 text-base">
                        Roll_number:{rollNo}
                      </p>
                      <p className=" text-gray-500 mt-3 text-base">
                        Email:{email}
                      </p>
                      <div className="flex flex-col mt-3">
                        <input
                          type="text"
                          id="it1"
                          name="it1"
                          value={it1}
                          className="p-2 mt-2 focus:outline-none bg-gray-100 rounded-md "
                          placeholder="Enter IT1 marks"
                          onChange={handleInputChange}
                        />
                        <input
                          type="text"
                          value={it2}
                          id="it2"
                          name="it2"
                          className="p-2 mt-2 focus:outline-none  bg-gray-100 rounded-md "
                          placeholder="Enter IT2 marks"
                          onChange={handleInputChange}
                        />
                        <input
                          type="text"
                          value={it3}
                          id="it3"
                          name="it3"
                          className="p-2 mt-2 focus:outline-none  bg-gray-100 rounded-md "
                          placeholder="Enter IT3 marks"
                          onChange={handleInputChange}
                        />
                        <input
                          type="text"
                          value={total}
                          id="total"
                          name="total"
                          className="p-2 mt-2 focus:outline-none  bg-gray-100 rounded-md "
                          placeholder="Enter IT3 marks"
                          onChange={handleInputChange}
                        />
                        <input
                          type="text"
                          value={avg}
                          id="avg"
                          name="avg"
                          className="p-2 mt-2 focus:outline-none  bg-gray-100 rounded-md "
                          placeholder="Enter IT3 marks"
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  type="button"
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-gray-800 text-base font-medium text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2  sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={() => {
                    updateItMarks();
                    setOpenModal(false);
                  }}
                >
                  Update
                </button>
                <button
                  type="button"
                  className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={() => {
                    setOpenModal(false);
                  }}
                  ref={cancelButtonRef}
                >
                  Cancel
                </button>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
