import React, { useState, useEffect } from 'react';
import Letter from '../Letters/Letter';
import InputLabel from '../InputLabel';
import PrimaryButton from '../PrimaryButton';
import SecondaryButton from '../SecondaryButton';

function Modal({ isOpen, onClose, templates, beneficiary, onTemplateSelect, currencies }) {
    const [bankName, setBankName] = useState('');
    const [companyAccountNumber, setCompanyAccountNumber] = useState('');
    const today = new Date().toISOString().split('T')[0];
    const [date, setDate] = useState(today);
    const [fromCurrency, setFromCurrency] = useState(null);
    const [toCurrency, setToCurrency] = useState(null);
    const [amountInWords, setAmountInWords] = useState('');

    useEffect(() => {
        if (templates && templates.length > 0) {
            onTemplateSelect(templates[0].id);
            setBankName(templates[0].directed_to);
            setCompanyAccountNumber(templates[0].company_bank_account?.account_number);
        }
    }, [templates, onTemplateSelect]);

    const handleTemplateChange = (e) => {
        const selectedTemplate = templates.find(t => t.id === parseInt(e.target.value));
        onTemplateSelect(selectedTemplate.id);
        setBankName(selectedTemplate.directed_to);
        setCompanyAccountNumber(selectedTemplate.company_bank_account?.account_number);
    };

    const handleFromCurrencyChange = async (e) => {
        const selectedCurrency = currencies.find(c => c.id === parseInt(e.target.value));
        setFromCurrency(selectedCurrency.name);

        try {
            const response = await axios.post(route('convertAmountToWords'), {
                amount: beneficiary.amount,
                currency: selectedCurrency.code
            });
            setAmountInWords(response.data.amount_in_words);
        } catch (error) {
            console.error('Error converting amount to words:', error);
        }
    };

    const handleToCurrencyChange = (e) => {
        const selectedCurrency = currencies.find(c => c.id === parseInt(e.target.value));
        setToCurrency(selectedCurrency.name);
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full" id="my-modal">
            <div className="relative top-20 mx-auto p-5 border w-[800px] shadow-lg rounded-md bg-white">
                <div className="mt-3">
                    <div className='w-full  grid grid-cols-4 gap-3'>
                        <div>
                            <InputLabel htmlFor="date" value="التاريخ" />
                            <div className="mt-2">
                                <input
                                    id='date'
                                    value={date || ''}
                                    type="date" className='mt-1 block w-full rounded-md border-gray-300 shadow-sm'
                                    onChange={e => setDate(e.target.value)}
                                />
                            </div>
                        </div>
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
                            <InputLabel htmlFor="from_currency" value="من العملة" />
                            <div className="mt-2">

                                <select id="from_currency" onChange={handleFromCurrencyChange} className=" mt-1 block w-full rounded-md border-gray-300 shadow-sm">
                                    <option value={''}>أختر العملة</option>
                                    {currencies.map((currency) => (
                                        <option key={currency.id} value={currency.id}>{currency.name}</option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        <div>
                            <InputLabel htmlFor="to_currency" value="الى العملة" />
                            <div className="mt-2">
                                <select id="to_currency" onChange={handleToCurrencyChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm">
                                    <option value={''}>أختر العملة</option>

                                    {currencies.map((currency) => (
                                        <option key={currency.id} value={currency.id}>{currency.name}</option>
                                    ))}
                                </select>
                            </div>
                        </div>

                    </div>
                    <div className="mt-4">
                        <div dir="auto" className="text-left p-3 border rounded bg-gray-50">
                            <Letter
                                beneficiary={beneficiary}
                                bank_name={bankName}
                                companyAccountNumber={companyAccountNumber}
                                date={date}
                                from_currency={fromCurrency}
                                to_currency={toCurrency}
                                amount_in_words={amountInWords}

                            />
                        </div>
                    </div>
                    <div className="flex items-center gap-4 px-4 py-3">
                        <SecondaryButton className='flex items-center gap-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0 1 10.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0 .229 2.523a1.125 1.125 0 0 1-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0 0 21 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 0 0-1.913-.247M6.34 18H5.25A2.25 2.25 0 0 1 3 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 0 1 1.913-.247m10.5 0a48.536 48.536 0 0 0-10.5 0m10.5 0V3.375c0-.621-.504-1.125-1.125-1.125h-8.25c-.621 0-1.125.504-1.125 1.125v3.659M18 10.5h.008v.008H18V10.5Zm-3 0h.008v.008H15V10.5Z" />
                            </svg>
                            <span>طباعة</span>
                        </SecondaryButton>
                        <PrimaryButton onClick={onClose}>اغلاق</PrimaryButton>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Modal;
