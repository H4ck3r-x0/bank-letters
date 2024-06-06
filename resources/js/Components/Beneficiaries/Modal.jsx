import React, { useState, useEffect } from 'react';
import Letter from '../Letters/Letter';
import InputLabel from '../InputLabel';

function Modal({ isOpen, onClose, templates, beneficiary, onTemplateSelect }) {
    const [templateContent, setTemplateContent] = useState('');
    const [bankName, setBankName] = useState('');

    useEffect(() => {
        if (templates && templates.length > 0) {
            onTemplateSelect(templates[0].id); // Default to the first template
            setTemplateContent(templates[0].content);
            setBankName(templates[0].directed_to); // Set the initial bank name

        }
    }, [templates, onTemplateSelect]);

    const handleTemplateChange = (e) => {
        const selectedTemplate = templates.find(t => t.id === parseInt(e.target.value));
        onTemplateSelect(selectedTemplate.id);
        setTemplateContent(selectedTemplate.content);
        setBankName(selectedTemplate.directed_to); // Update the bank name when template changes
    };

    const handleCurrencyChange = (e) => {
        const selectedTemplate = templates.find(t => t.id === parseInt(e.target.value));
        onTemplateSelect(selectedTemplate.id);
        setTemplateContent(selectedTemplate.content);
        setBankName(selectedTemplate.directed_to); // Update the bank name when template changes
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full" id="my-modal">
            <div className="relative top-20 mx-auto p-5 border w-[800px] shadow-lg rounded-md bg-white">
                <div className="mt-3">
                    <div className='w-full  grid grid-cols-3 gap-3'>
                        <div>
                            <InputLabel htmlFor="template" value="اختر المصرف" />
                            <div className="mt-2">
                                <select id="template" onChange={handleTemplateChange} className=" mt-1 block w-full rounded-md border-gray-300 shadow-sm">
                                    {templates.map((template) => (
                                        <option key={template.id} value={template.id}>{template.directed_to}</option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        <div>
                            <InputLabel htmlFor="currency" value="العملة" />
                            <div className="mt-2 ">
                                <select id="currency" onChange={handleCurrencyChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm">
                                    <option value="1">USD</option>

                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="mt-4">
                        <div dir="auto" className="text-left p-3 border rounded bg-gray-50">
                            <Letter beneficiary={beneficiary} bank_name={bankName} />
                        </div>
                    </div>
                    <div className="items-center px-4 py-3">
                        <button onClick={onClose} className="px-4 py-2 bg-gray-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300">
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Modal;
