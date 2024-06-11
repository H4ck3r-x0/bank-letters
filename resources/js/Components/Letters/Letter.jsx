import React from 'react';


function Letter({
    bank_name,
    companyAccountNumber,
    date,
    beneficiary,
    from_currency,
    to_currency,
    amount_in_words
}) {
    const toCurrency = () => {
        if (!to_currency) {
            return 'بالريال السعودي';
        }
        return 'بال' + to_currency;
    }
    const renderAmountToWords = () => {
        if (!amount_in_words) {
            return beneficiary.amount_in_words + ' ريال سعودي';
        }

        return amount_in_words + ' ' + from_currency;
    }

    const renderText = () => {
        if (!from_currency) {
            return <span>يرجى التكرم بتحويل  مبلغ</span>
        }

        return <span>يرجى التكرم بتحويل ما يعادل مبلغ</span>;
    }


    return (
        <div className="p-8">
            <div className="text-right">
                <p>الموافق: {date} م</p>
                <h1 className="text-2xl font-semibold mt-4">السادة / {bank_name} المحترمين</h1>
                <p className="mt-4 text-lg">تحية طيبة وبعد،</p>
                <div className="w-full mt-4 leading-9">
                    {renderText()}
                    <span> {beneficiary.amount} </span>
                    <span> {from_currency || 'ريال سعودي'} </span>
                    ( <span className='text-gray-800 '> {renderAmountToWords()}  </span> )
                    <span>  </span>
                    <span>
                        {toCurrency()}
                    </span>
                    <span className="block text-lg"> على العنوان التالي:-</span>
                </div>
                <table className="border mt-4 w-full text-sm text-left text-gray-500 ">
                    <tbody>
                        <tr className="bg-white border-b ">
                            <td className="py-4 px-6 font-bold">{beneficiary.beneficiary_name}</td>
                            <td className="py-4 px-6 font-bold tracking-wide text-gray-700 whitespace-nowrap ">Beneficiary Name</td>
                        </tr>
                        <tr className="bg-gray-50 border-b ">
                            <td className="py-4 px-6 font-bold">{beneficiary.beneficiary_bank}</td>
                            <td className="py-4 px-6 font-bold tracking-wide text-gray-700 whitespace-nowrap ">Beneficiary Bank</td>
                        </tr>
                        <tr className="bg-white border-b ">
                            <td className="py-4 px-6 font-bold">{beneficiary.account_no}</td>
                            <td className="py-4 px-6 font-bold tracking-wide text-gray-700 whitespace-nowrap ">Account No</td>
                        </tr>
                        <tr className="bg-gray-50 ">
                            <td className="py-4 px-6 font-bold">{beneficiary.swift_code}</td>
                            <td className="py-4 px-6 font-bold tracking-wide text-gray-700 whitespace-nowrap ">Swift Code</td>
                        </tr>
                    </tbody>
                </table>
                <p className="mt-4">
                    خصماً من حسابنا الجاري طرفكم رقم: {companyAccountNumber} بالريال
                </p>
                <p className="mt-4">شاكرين حسن تعاونكم</p>
                <p className="mt-4">وتقبلوا خالص تحياتنا</p>
                <p className="mt-4">اسم الشركة</p>
            </div>
        </div>
    );
}

export default Letter;
