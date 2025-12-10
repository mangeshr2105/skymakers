'use client';

import { Fragment, useEffect, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { useModal } from '@/context/ModalContext';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

const InquiryModal = () => {
  const { isOpen: isModalOpen, openModal, closeModal } = useModal();
  const [localIsOpen, setLocalIsOpen] = useState(false);

  // Make openModal available globally for manual triggering
  useEffect(() => {
    const win = window as unknown as { openInquiryModal?: () => void };
    win.openInquiryModal = openModal;
    return () => {
      delete win.openInquiryModal;
    };
  }, [openModal]);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  
  const [phoneValue, setPhoneValue] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev: typeof formData) => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handlePhoneChange = (value: string = '') => {
    setPhoneValue(value);
    setFormData(prev => ({
      ...prev,
      phone: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.email && !formData.phone) {
      alert('Please provide either an email or phone number');
      return;
    }
    
    // Handle form submission here
    console.log('Form submitted:', formData);
    closeModal();
  };

  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const hasSeenModal = sessionStorage.getItem('hasSeenInquiryModal');
    if (hasSeenModal) return;
    
    const timer = setTimeout(() => {
      setLocalIsOpen(true);
      openModal();
      sessionStorage.setItem('hasSeenInquiryModal', 'true');
    }, 5000);
    
    return () => clearTimeout(timer);
  }, [openModal]);
  
  const handleClose = () => {
    setLocalIsOpen(false);
    closeModal();
  };

  if (!isModalOpen || !localIsOpen) return null;

  return (
    <Transition appear show={isModalOpen} as={Fragment}>
      <Dialog as="div" className="fixed bottom-4 left-4 z-50" style={{ width: '320px' }} onClose={handleClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex items-end justify-start p-4 text-left">
            <Transition.Child
              as={Fragment}
              enter="transition-all duration-300 ease-out"
              enterFrom="opacity-0 -translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="transition-all duration-200 ease-in"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 -translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="w-full transform overflow-hidden rounded-2xl bg-white p-4 text-left align-middle shadow-xl transition-all hover:shadow-2xl hover:-translate-y-1" style={{ width: '320px' }}>
                <div className="flex justify-between items-center mb-4">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Send us a message
                  </Dialog.Title>
                  <button
                    type="button"
                    className="rounded-md text-gray-400 hover:text-gray-500 focus:outline-none"
                    onClick={closeModal}
                  >
                    <span className="sr-only">Close</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                <form onSubmit={handleSubmit} className="mt-2 space-y-3">
                  <div>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      required
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-3 border bg-gray-50"
                    />
                  </div>

                  <div className="relative">
                    <PhoneInput
                      international
                      defaultCountry="IN"
                      value={phoneValue}
                      onChange={handlePhoneChange}
                      placeholder="Enter phone number"
                      className="block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm bg-gray-50"
                    />
                    <style jsx global>{`
                      .PhoneInputInput {
                        background: transparent;
                        border: none !important;
                        outline: none !important;
                        padding: 0.75rem 0.5rem !important;
                        width: 100% !important;
                        box-shadow: none !important;
                      }
                      .PhoneInput {
                        display: flex !important;
                        align-items: center !important;
                        width: 100% !important;
                      }
                      .PhoneInputCountry {
                        margin-right: 0.5rem !important;
                        border: none !important;
                        background: none !important;
                      }
                      .PhoneInputCountryIcon {
                        border: none !important;
                        box-shadow: none !important;
                      }
                      .PhoneInputCountrySelect {
                        position: absolute !important;
                        top: 0;
                        left: 0;
                        height: 100% !important;
                        width: 100%;
                        opacity: 0;
                        z-index: 1;
                      }
                      .PhoneInputCountryIcon {
                        width: 1.5rem !important;
                        height: 1.5rem !important;
                      }
                    `}</style>
                  </div>

                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email Address"
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-3 border bg-gray-50"
                    />
                    <p className="mt-1 text-xs text-gray-500 text-center">
                      {!formData.email && !formData.phone ? 'Please provide either email or phone' : ''}
                    </p>
                  </div>

                  <div>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={3}
                      placeholder="Your Message"
                      required
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-3 border bg-gray-50"
                    />
                  </div>

                  <div className="mt-6">
                    <button
                      type="submit"
                      className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-800 hover:bg-green-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors"
                    >
                      Submit Inquiry
                    </button>
                  </div>
                </form>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}

export default InquiryModal;
