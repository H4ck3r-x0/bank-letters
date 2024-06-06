import React from 'react';




function Letter({ bank_name, beneficiary }) {
    return (
        <div className="p-8">
            <div className="text-right">
                <p>الموافق: 20/08/2023 م</p>
                <h1 className="text-2xl font-semibold mt-4">السادة / {bank_name} المحترمين</h1>
                <p className="mt-4 text-lg">تحية طيبة وبعد،</p>
                <p className="mt-4 leading-9">
                    يرجى التكرم بتحويل ما يعادل مبلغ <span> {beneficiary.amount} </span>
                    ريال سعودي ( <span className='text-gray-800 font-semibold'>{beneficiary.amount_in_words}</span> )
                    بالدينار التونسي،
                    <span className="block text-lg"> على العنوان التالي:-</span>
                </p>
                <table className="border mt-4 w-full text-sm text-left text-gray-500 ">

                    <tbody>
                        <tr className="bg-white border-b ">
                            <td className="py-4 px-6 font-bold">{beneficiary.beneficiary_name}</td>
                            <td className="py-4 px-6 font-bold text-gray-900 whitespace-nowrap ">Beneficiary Name</td>
                        </tr>
                        <tr className="bg-gray-50 border-b ">
                            <td className="py-4 px-6 font-bold">{beneficiary.beneficiary_bank}</td>
                            <td className="py-4 px-6 font-bold text-gray-900 whitespace-nowrap ">Beneficiary Bank</td>
                        </tr>
                        <tr className="bg-white border-b ">
                            <td className="py-4 px-6 font-bold">{beneficiary.account_no}</td>
                            <td className="py-4 px-6 font-bold text-gray-900 whitespace-nowrap ">Account No</td>
                        </tr>
                        <tr className="bg-gray-50 ">
                            <td className="py-4 px-6 font-bold">{beneficiary.swift_code}</td>
                            <td className="py-4 px-6 font-bold text-gray-900 whitespace-nowrap ">Swift Code</td>
                        </tr>
                    </tbody>
                </table>
                <p className="mt-4">
                    خصماً من حسابنا الجاري طرفكم رقم: 2796 بالريال
                </p>
                <p className="mt-4">شاكرين حسن تعاونكم</p>
                <p className="mt-4">وتقبلوا خالص تحياتنا</p>
                <p className="mt-4">اسم الشركة</p>
            </div>
        </div>
    );
}

export default Letter;
